import * as PropTypes from "prop-types";
import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

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
          <p className="max-w-xs md:max-w-md text-xl mt-2 mb-2 lg:pl-10 lg:p-4 lg:-mt-12 backdrop-blur-3xl bg-emerald-50 rounded-xl -rotate-3">
            Also check out{" "}
            <a href="https://docs.google.com/spreadsheets/d/1sZ5mgeSuHvRBsn0SzOZyYKS1kOJzwtCS0JSyLnG-ELs/edit#gid=0">
              the raw data spreadsheet
            </a>
            . Comments are open and encouraged!
          </p>
          <h2 className="text-center text-5xl pb-4">Video</h2>
          <div className="max-w-full grid grid-cols-1 md:grid-cols-3 auto-rows-max justify-self-center text-orange-600">
            {this.props.data.allVideoJson.edges.map((f) => {
              return (
                <h2 className="p-2 border-t-2 border-orange-300 even:bg-emerald-200">
                  {f.node.era ? f.node.era.slice(0, 4) + ": " : ""}
                  <Link key={f.node.jsonId} to={`/` + f.node.jsonId}>
                    {f.node.name}
                  </Link>
                </h2>
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
          era
        }
      }
    }
  }
`;
