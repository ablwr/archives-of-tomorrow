import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const IllustrationsPage = () => (
  <Layout>
    <>
      <h1 className="text-orange-400 drop-shadow text-center">Data</h1>
      <div className="w-9/12 grid justify-self-center text-orange-700">
        <ul className="list-disc">
          <li>
            <Link to="/data/video">Video</Link>
          </li>
          <li>Audio (Coming soon) </li>
          <li>Film (Coming soon)</li>
        </ul>
      </div>
    </>
  </Layout>
);

export default IllustrationsPage;
