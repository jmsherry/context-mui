import React from "react";
import { Outlet } from "react-router-dom";
import SiteNav from "./SiteNav";

function Layout() {
  return (
    <>
      <header className="site-nav">
        <h1>My App</h1>
        <SiteNav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
