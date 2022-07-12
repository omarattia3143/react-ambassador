import React from "react";
import Nav from "./Nav";
import ProductsFrontend from "../pages/ProductsFrontend";

const Layout = (props: any) => {
  return (
    <div>
      <Nav />
      <header />
      <main>
        <div className="album py-5 bg-light">
          <div className="container">{props.children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
