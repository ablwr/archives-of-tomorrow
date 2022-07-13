import * as React from "react";
import { Link } from "gatsby";
// @ts-ignore
import bioPic from "../images/ashleyblewer.jpg";
import video from "../videoSVGs/2006-bluray-1.svg";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <div className="grid justify-items-center text-orange-600">
      <h1 className="text-center text-orange-400 drop-shadow">About</h1>
      <div className="lg:w-9/12 grid lg:grid-cols-2 justify-items-center text-base">
        <div className="p-2 lg:w-9/12 grid text-orange-600">
          <img
            className="rounded-full grid justify-self-center mb-4 w-6/12"
            src={bioPic}
            alt="Ashley Blewer"
          />
          <p>
            Archives of Tomorrow is owned and operated by{" "}
            <a href="https://ashleyblewer.com">Ashley Blewer</a>.
          </p>
          <p>
            Ashley Blewer is an archivist, educator, and software engineer with
            over a decade of experience building video analysis tools and
            pipelines. Ashley specializes in video and audio formats, digital
            preservation, systems and workflows, community support and
            solutions, computer-to-human interpretation, and teaching technical
            concepts at all levels.
          </p>
        </div>
        <div className="grid justify-items-center pt-8 p-2 lg:pt-0 lg:border-l-2 lg:border-orange-600">
          <div className="lg:pl-8">
            <p className="lg:w-9/12">
              This website is here to support{" "}
              <Link to="/books/">published books</Link> and provide{" "}
              <Link to="/data/">free educational materials</Link> about
              audiovisual formats.
            </p>
            <p className="pt-4 lg:w-9/12">
              If you'd like to support this work, you can use{" "}
              <a href="https://ko-fi.com/ablwr">Ko-fi</a> to "buy me a coffee"!
            </p>
            <img className="lg:w-8/12" src={video} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
