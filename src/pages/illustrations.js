import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const IllustrationsPage = () => (
  <Layout>
    <>
      <h1 className="text-orange-400 drop-shadow text-center">Illustrations</h1>

      <div className="w-6/12 grid justify-self-center text-orange-700">
        <ul className="list-disc">
          <li>
            <Link to="/illustrations/video">Video</Link>
          </li>
          <li>
            <a href="https://github.com/ablwr/illustrations/tree/main/cables">
              Cables
            </a>
          </li>
          <li>Audio (Coming soon) </li>
          <li>Film (Coming soon)</li>
        </ul>
        <p className="pt-8">
          All illustrations available under an open source and{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">
            CC-BY license
          </a>
          .
        </p>
        <p className="pt-8">
          {" "}
          Download{" "}
          <a href="https://github.com/ablwr/illustrations/">
            all illustrations here on GitHub
          </a>
          .
        </p>
      </div>
    </>
  </Layout>
);

export default IllustrationsPage;
