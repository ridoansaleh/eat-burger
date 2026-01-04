import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 318px)",
    padding: "20px 10px",
    [theme.breakpoints.up("md")]: {
      padding: 0,
      paddingTop: "40px",
    },
  },
  profileHead: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& > p": {
      width: "100%",
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      "& > p": {
        textAlign: "left",
      },
    },
  },
  wrapper: {
    width: "100%",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      width: "800px",
    },
  },
  avatar: {
    backgroundColor: "#71A1E1",
    width: "96px",
    height: "96px",
    marginBottom: "20px",
    fontSize: "25px",
  },
  name: {
    marginBottom: "30px",
  },
  avatarSkeleton: {
    width: "40px",
    height: "45px",
  },
  textSkeleton: {
    width: "100%",
    height: "20px",
    [theme.breakpoints.up("md")]: {
      width: "35%",
    },
  },
  editForm: {
    display: "flex",
  },
  formInput: {
    marginRight: "10px",
    [theme.breakpoints.up("md")]: {
      width: "400px"
    }
  },
  phoneInvalidWrapper: {
    paddingTop: "0",
  },
  phoneInvalid: {
    color: "#f44336",
    fontSize: "12px !important"
  }
}));

export default useStyles;
