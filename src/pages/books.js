import Layout from "../components/layout";
import * as React from "react";
import cover from "../images/video-cover.jpg";

const IndexPage = () => (
  <Layout>
    <div className="grid justify-items-center text-orange-600">
      <h1 className="text-center text-orange-400 drop-shadow">Books</h1>
      <div className="w-9/12 grid lg:grid-cols-2 justify-items-center text-base">
        <div className="grid justify-items-center pb-8">
          <h2 className="text-2xl pb-4">Available August 16th!</h2>
          <img
            className="w-5/12 justify-self-center"
            src={cover}
            alt="The Illustrated Guide to Video"
          />
          <h2 className="text-2xl font-bold pb-4">
            The Illustrated Guide to Video Formats
          </h2>
          <p>
            The Illustrated Guide to Video Formats is an easy-to-read
            exploration of thirty-six popular and forgotten video formats,
            covering fifty years of video history. This collection begins with
            the first major video reel format, 2" Quadruplex video (invented in
            1956) and concludes with the Blu-ray disc (introduced in 2006). In
            between, this book covers classics like VHS and Betamax, fan
            favorites Pixelvision and LaserDisc, commercial flops, professional
            successes, innovative technologies, and rare formats like CED
            (Capacitance Electronic Disc) and V-Cord II.
          </p>
          <p>
            This guide contains 158 detailed illustrations featuring containers,
            video playback devices (VTRs), camcorders, cases, and more.
          </p>
          <p>
            Along with basic facts, there are some fun facts about the history
            of video formats, their context in the larger media production
            ecosystems, and the how and why behind their inventions. Whether
            you're an advanced analog video technician or too young to remember
            the era before everything went 100% digital, this book is sure to be
            an interesting, informative journey.
          </p>
          <p>
            All illustrations and text are extra-large and in black-and-white,
            so the content of this book can double as posters or coloring pages!
          </p>
        </div>
        <div>
          <h2 className="text-2xl pb-4">Coming in 2023</h2>
          <ul>
            <li>The Illustrated Guide to Audio</li>
            <li>The Illustrated Guide to Film</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
