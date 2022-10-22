import React from "react";
import { Helmet } from "react-helmet";
import Section1 from "./sections/Section1";

export default function Cart() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Cart</title>
      </Helmet>
      <Section1 />
    </div>
  );
}
