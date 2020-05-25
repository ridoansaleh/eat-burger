import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
