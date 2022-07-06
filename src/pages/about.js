import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <>
      <h1 className="text-center text-orange-400 drop-shadow">About</h1>
      <p className="max-w-xl justify-self-center text-orange-600">
        Archives of Tomorrow is owned and operated by{" "}
        <a href="https://ashleyblewer.com">Ashley Blewer</a>. For now, I use
        this to <Link to="/books/">publish books</Link> and provide free
        educational materials about audiovisual formats.
      </p>
      <p className="max-w-xl justify-self-center text-orange-600">
        If you'd like to support my work, you can use{" "}
        <a href="https://ko-fi.com/ablwr">Ko-fi</a> to "buy me a coffee"!
      </p>
    </>
  </Layout>
);

export default IndexPage;
