import React from "react";

import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <main className="flex-grow flex">
        <Sidebar />
        <section className="w-full bg-gray-100 p-4 md:p-8">{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
