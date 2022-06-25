import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

const VideoIllustrations = ({ data }) => (
  <Layout>
    <>
      <h1 className="text-orange-400 drop-shadow text-center">Video</h1>

      <div className="max-w-full grid grid-cols-3 lg:grid-cols-5">
        {data.allFile.edges.map((edge) => {
          return (
            <div className="" key={edge.node.base}>
              <img
                loading="lazy"
                src={edge.node.publicURL}
                alt={edge.node.base}
              />
            </div>
          );
        })}
      </div>
    </>
  </Layout>
);

export default VideoIllustrations;

export const indexQuery = graphql`
  query Illustrations {
    allFile(filter: { sourceInstanceName: { eq: "videoIllustrations" } }) {
      edges {
        node {
          base
          publicURL
        }
      }
    }
  }
`;
