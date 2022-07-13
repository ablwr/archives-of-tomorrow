import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
// @ts-ignore
import video from "../videoSVGs/1956-quad-2.svg";

const IllustrationsPage = () => (
  <Layout>
    <>
      <h1 className="text-orange-400 drop-shadow text-center">Data</h1>

      <div className="grid lg:grid-cols-3 gap-2 m-8 justify-self-center">
        <div className="max-w-xs text-center p-4 border-2 border-orange-600">
          <Link to="/data/video">
            <img src={video} />
            <br />
            Video
          </Link>
        </div>
        <div className="text-center p-4 border-2 border-orange-600">
          Audio
          <br />
          (Coming soon)
        </div>
        <div className="text-center p-4 border-2 border-orange-600">
          Film
          <br />
          (Coming soon)
        </div>
      </div>
    </>
  </Layout>
);

export default IllustrationsPage;
