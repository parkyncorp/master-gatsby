import React from "react";
import Nav from "./Nav.js";
import Footer from "./Footer.js";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
