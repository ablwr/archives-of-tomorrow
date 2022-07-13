import Layout from "../components/layout";
import * as React from "react";
// @ts-ignore
import cover from "../images/video-cover.jpg";

const IndexPage = () => (
  <Layout>
    <div className="grid justify-items-center text-center text-orange-600">
      <h1 className="text-orange-400 drop-shadow">Books</h1>
      <h2 className="text-3xl pb-4 text-center">
        <strong>The Illustrated Guide to Video Formats</strong> is now
        available!
      </h2>
      <div className="lg:w-9/12 pl-8 list-disc text-left grid gap-4 lg:grid-cols-4">
        <div className="text-center p-4 border-2 border-orange-600">
          Request at{" "}
          <a href="https://www.indiebound.org/">your local bookstore</a>!
        </div>
        <div className="p-4 bg-orange-400 text-center text-white">
          <h2 className="text-3xl">Buy one, give one!</h2>
          <p className="text-base">(available for a short period of time)</p>
          <div className="pt-2 pb-2 font-bold">
            <a href="https://ko-fi.com/s/00e5125a6e">Buy here (via Ko-fi)</a>
          </div>
        </div>
        <div className="text-center p-4 border-2 border-orange-600">
          <a href="https://smile.amazon.com/Illustrated-Guide-Video-Formats/dp/1958543004">
            Amazon
          </a>
          <p className="text-base">
            Non-U.S., check your regional Amazon (e.g. amazon.de, amazon.co.uk)
          </p>
        </div>
        <div className="text-center p-4 border-2 border-orange-600">
          <a href="https://www.barnesandnoble.com/w/the-illustrated-guide-to-video-formats-ashley-blewer/1141757839">
            Barnes & Noble
          </a>
        </div>
      </div>
      <div className="border-b-2 lg:w-6/12 grid justify-self-center border-t-2 mt-12 pb-2 border-orange-600 text-center">
        <h2 className="pt-2">Coming in 2023</h2>
        <ul>
          <li>The Illustrated Guide to Audio</li>
          <li>The Illustrated Guide to Film</li>
        </ul>
      </div>
      <img
        className="w-4/12 justify-self-center pt-12"
        src={cover}
        alt="The Illustrated Guide to Video"
      />{" "}
      <h2 className="text-2xl font-bold text-center pt-4">
        The Illustrated Guide to Video Formats
      </h2>
      <div className="lg:w-6/12 p-2 text-base text-left">
        <p className="pt-4">
          The Illustrated Guide to Video Formats is an easy-to-read exploration
          of thirty-six popular and forgotten video formats, covering fifty
          years of video history. This collection begins with the first major
          video reel format, 2" Quadruplex video (invented in 1956) and
          concludes with the Blu-ray disc (introduced in 2006).
        </p>
        <p className="pt-4">
          In between, this book covers classics like VHS and Betamax, fan
          favorites Pixelvision and LaserDisc, commercial flops, professional
          successes, innovative technologies, and rare formats like CED
          (Capacitance Electronic Disc) and V-Cord II.
        </p>
        <p className="pt-4">
          This guide contains 158 detailed illustrations featuring containers,
          video recording and playback devices, camcorders, cases, and more.
        </p>
        <p className="pt-4">
          Along with basic facts, there are some fun facts about the history of
          video formats, their context in the larger media production
          ecosystems, and the how and why behind their inventions. Whether
          you're an advanced analog video technician or too young to remember
          the era before everything went 100% digital, this book is sure to be
          an interesting, informative journey.
        </p>
        <p className="pt-4">
          All illustrations and text are extra-large and in black-and-white, so
          the content of this book can double as posters or coloring pages!
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
