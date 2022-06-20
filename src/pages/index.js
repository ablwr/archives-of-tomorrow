import * as React from "react";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <>
      <h1 className="grid grid-cols-3 gap-10 justify-center text-orange-400">
        <span>Archives</span>
        <span>of</span>
        <span>Tomorrow</span>
      </h1>
    </>
  </Layout>
);

export default IndexPage;
