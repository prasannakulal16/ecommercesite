import React from "react";
import { Helmet } from "react-helmet";
import Section1 from "./sections/Section1";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ecommerce Site</title>
      </Helmet>
      <Section1 />
    </>
  );
}
