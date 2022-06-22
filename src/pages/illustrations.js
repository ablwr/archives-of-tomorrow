import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <>
      <h1 className="text-orange-400 drop-shadow text-center">Illustrations</h1>

      <div className="w-9/12 grid justify-self-center text-orange-600">
        <h2 className="font-bold text-2xl pb-2">Coming soon!</h2>
        <p>
          162 illustrations available under an open source and{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">
            CC-BY license
          </a>{" "}
          available as soon as{" "}
          <Link to="/books/">The Illustrated Guide for Video Formats</Link> is
          available for preorder.
        </p>
      </div>
    </>
  </Layout>
);

export default IndexPage;
