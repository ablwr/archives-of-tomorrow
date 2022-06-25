import * as PropTypes from "prop-types";
import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

class DataIndexPage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      videoJson: PropTypes.object,
    }),
  };

  render() {
    return (
      <Layout>
        <div className="grid grid-cols-1">
          <h1 className="text-orange-400 text-center drop-shadow max-w-full">
            Data
          </h1>
          <p className="max-w-md text-xl pl-10 p-4 -mt-12 backdrop-blur-3xl bg-emerald-50 rounded-xl -rotate-3">
            Also check out{" "}
            <a href="https://docs.google.com/spreadsheets/d/1sZ5mgeSuHvRBsn0SzOZyYKS1kOJzwtCS0JSyLnG-ELs/edit#gid=0">
              the full spreadsheet
            </a>
            .<br /> Comments are open and encouraged!
          </p>
          <h2 className="text-center text-5xl pb-4">Video</h2>
          <div className="max-w-full grid grid-cols-1 md:grid-cols-5 justify-content-center content-center auto-rows-max justify-self-center text-orange-600">
            {this.props.data.allVideoJson.edges.map((f) => {
              return (
                <Link key={f.node.jsonId} to={`/` + f.node.jsonId}>
                  <h2 className="border-b-4  border-orange-900 p-2 text-center">
                    {f.node.name}
                  </h2>
                </Link>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

export default DataIndexPage;

export const pageQuery = graphql`
  query AllVideoData {
    allVideoJson {
      edges {
        node {
          name
          jsonId
        }
      }
    }
  }
`;
