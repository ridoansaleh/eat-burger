import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  Suspense,
} from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import useStyles from "./_appStyle";
import { FirebaseContext, UserContext, ShoppingCartContext } from "./context";
import useFirebaseAuth from "./hook/useFirebaseAuth";
import { logout_routes, logged_in_routes } from "./routes";
import { COLLECTION_USERS } from "./constant/collection";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState({ id: "", email: "", lastSignInTime: "" });
  const [status, setStatus] = useState("initial");
  const [isAuthResolved, setAuthResolved] = useState(false);

  const classes = useStyles();
  const { auth, db } = useContext(FirebaseContext);
  const authUser = useFirebaseAuth(auth);

  const userContextValue = useMemo(
    () => ({ isLogin, ...user }),
    [isLogin, user]
  );

  const cartContextValue = useMemo(
    () => ({ status, onSetStatus: setStatus }),
    [status]
  );

  useEffect(() => {
    // Cleanup / race condition risk:
    // If the component unmounts before Firestore resolves, you may set state on an unmounted component
    let mounted = true;

    if (!authUser?.email) {
      setLogin(false);
      setAuthResolved(true);
      return;
    }
    db.collection(COLLECTION_USERS)
      .where("email", "==", authUser.email || "")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          throw new Error(`No user found with email: ${authUser.email}`);
        }
        const doc = querySnapshot.docs[0];
        const data = { id: doc.id, ...doc.data() };
        setUser({
          id: data.id,
          email: data.email,
          lastSignInTime: authUser?.metadata?.lastSignInTime || "",
        });
        setLogin(true);
      })
      .catch((error) => {
        console.log("Error getting user information: ", error);
        setLogin(false);
      })
      .finally(() => {
        if (mounted) setAuthResolved(true);
      });

    return () => {
      mounted = false;
    };
  }, [authUser, db]);

  const appRoutes = isLogin ? logged_in_routes : logout_routes;

  if (!isAuthResolved) {
    return <div className={classes.emptyScreen} />;
  }

  return (
    <UserContext.Provider value={userContextValue}>
      <ShoppingCartContext.Provider value={cartContextValue}>
        <HashRouter>
          <Layout>
            <Suspense fallback={<div className={classes.emptyScreen} />}>
              <Switch>
                {appRoutes.map((data) => (
                  <Route key={data.path} {...data} />
                ))}
              </Switch>
            </Suspense>
          </Layout>
        </HashRouter>
      </ShoppingCartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
