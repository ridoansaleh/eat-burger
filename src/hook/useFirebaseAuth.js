import { useState, useEffect } from "react";

const useFirebaseAuth = (auth) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((authUser) => {
      if (authUser?.emailVerified) {
        setAuthUser(authUser);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      unlisten();
    };
  }, []);

  return authUser;
};

export default useFirebaseAuth;
