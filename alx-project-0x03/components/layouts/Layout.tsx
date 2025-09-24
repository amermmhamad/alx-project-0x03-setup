import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import type { LayoutProps } from "@/interfaces/index";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;