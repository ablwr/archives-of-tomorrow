import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import video from "../videoSVGs/1976-vhs-3.svg";
import cables from "../images/cables.jpg";

const IllustrationsPage = () => (
  <Layout>
    <>
      <h1 className="text-orange-400 drop-shadow text-center">Illustrations</h1>

      <div className="lg:w-9/12 grid justify-self-center text-orange-700">
        <p className="text-center">
          All illustrations can be{" "}
          <a href="https://github.com/ablwr/illustrations/">
            viewed and downloaded here
          </a>{" "}
          on GitHub.
        </p>
        <div className="grid lg:grid-cols-4 gap-2 m-8">
          <div className="text-center p-4 border-2 border-orange-600">
            <Link to="/illustrations/video">
              <img src={video} />
              <br />
              Video
            </Link>
          </div>
          <div className="text-center p-4 border-2 border-orange-600">
            <a href="https://github.com/ablwr/illustrations/tree/main/cables">
              <img src={cables} />
              <br />
              Cables
            </a>
          </div>
          <div className="content-center text-center p-4 border-2 border-orange-600">
            Audio <br />
            (Coming soon)
          </div>
          <div className="content-center text-center p-4 border-2 border-orange-600">
            Film
            <br />
            (Coming soon)
          </div>
        </div>
        <p className="text-center">
          All illustrations available under an open source and{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">
            CC-BY license
          </a>
          .
        </p>
      </div>
    </>
  </Layout>
);

export default IllustrationsPage;
