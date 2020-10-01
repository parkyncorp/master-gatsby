import React from "react";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import 'normalize.css';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
