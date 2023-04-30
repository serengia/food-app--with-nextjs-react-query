import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactPage from "@/components/Pages/ContactPage";
import Head from "next/head";
import React from "react";

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Contact me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <ContactPage />
        <Footer />
      </main>
    </>
  );
}
