import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";
import { Footer } from "../base/Footer";
import { Header } from "../base/header";

export const Layout = ({ children }) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Head>
        <title>Siyaahat</title>
        <link
          rel="shortcut icon"
          href="/imgs/SiyaahatLogo.png"
          type="image/x-icon"
        />
      </Head>
      <ToastContainer autoClose={2000} closeOnClick />
      <main className="font-[poppins] text-reg">
        <Header />
        <div className="layout__container">{children}</div>
        <Footer />
      </main>
    </>
  );
};
