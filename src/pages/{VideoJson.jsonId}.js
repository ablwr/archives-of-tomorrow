import * as PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

class DataTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      videoJson: PropTypes.object.isRequired,
    }),
  };
  render() {
    return (
      <Layout>
        <div className="grid grid-cols-1">
          <div className="m-4 mb-0 text-center">
            <h1>{this.props.data.videoJson.name}</h1>
          </div>
        </div>
        <div className="w-11/12 grid lg:grid-cols-3 gap-2 m-4 border-2 text-lg border-orange-800">
          {this.props.data.videoJson.aka && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                AKA
              </span>
              <div className="pl-6">{this.props.data.videoJson.aka}</div>
            </div>
          )}
          {this.props.data.videoJson.era && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Era
              </span>
              <div className="pl-6">{this.props.data.videoJson.era}</div>
            </div>
          )}
          {this.props.data.videoJson.region && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Region
              </span>
              <div className="pl-6">{this.props.data.videoJson.region}</div>
            </div>
          )}
          {this.props.data.videoJson.format && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Format
              </span>
              <div className="pl-6">{this.props.data.videoJson.format}</div>
            </div>
          )}
          {this.props.data.videoJson.format2 && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Format2
              </span>
              <div className="pl-6">{this.props.data.videoJson.format2}</div>
            </div>
          )}
          {this.props.data.videoJson.developedBy && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Developed by
              </span>
              <div className="pl-6">
                {this.props.data.videoJson.developedBy}
              </div>
            </div>
          )}
          {this.props.data.videoJson.manufacturers && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Manufacturers
              </span>
              <div className="pl-6">
                {this.props.data.videoJson.manufacturers}
              </div>
            </div>
          )}
          {this.props.data.videoJson.market && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Market
              </span>
              <div className="pl-6">{this.props.data.videoJson.market}</div>
            </div>
          )}
          {this.props.data.videoJson.capacity && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                (Max) Capacity
              </span>
              <div className="pl-6">{this.props.data.videoJson.capacity}</div>
            </div>
          )}
          {this.props.data.videoJson.size && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Size
              </span>
              <div className="pl-6">{this.props.data.videoJson.size}</div>
            </div>
          )}
          {this.props.data.videoJson.color && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Color
              </span>
              <div className="pl-6">{this.props.data.videoJson.color}</div>
            </div>
          )}
          {this.props.data.videoJson.encoding && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Encoding
              </span>
              <div className="pl-6">{this.props.data.videoJson.encoding}</div>
            </div>
          )}
          {this.props.data.videoJson.scanProcess && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Scan Process
              </span>
              <div className="pl-6">
                {this.props.data.videoJson.scanProcess}
              </div>
            </div>
          )}
          {this.props.data.videoJson.tapeType && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Tape type
              </span>
              <div className="pl-6">{this.props.data.videoJson.tapeType}</div>
            </div>
          )}
          {this.props.data.videoJson.tapeWidth && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Tape width
              </span>
              <div className="pl-6">{this.props.data.videoJson.tapeWidth}</div>
            </div>
          )}
          {this.props.data.videoJson.bandwidth && (
            <div className="border-r-2 border-b-2 border-orange-800">
              <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
                Bandwidth
              </span>
              <div className="pl-6">{this.props.data.videoJson.bandwidth}</div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 m-4 border-2 border-orange-800">
          <div className="uppercase relative top-0 left-2 text-lg text-orange-900">
            Fun facts
          </div>
          {this.props.data.videoJson.fact1 && (
            <div className="pl-6 pr-10 pt-2 border-b-2 border-orange-800">
              {this.props.data.videoJson.fact1}
            </div>
          )}
          {this.props.data.videoJson.fact2 && (
            <div className="pl-6 pr-10 pt-2 border-b-2 border-orange-800">
              {this.props.data.videoJson.fact2}
            </div>
          )}
          {this.props.data.videoJson.fact3 && (
            <div className="pl-6 pr-10 pt-2 border-b-2 border-orange-800">
              {this.props.data.videoJson.fact3}
            </div>
          )}
          {this.props.data.videoJson.fact4 && (
            <div className="pl-6 pr-10 pt-2 border-b-2 border-orange-800">
              {this.props.data.videoJson.fact4}
            </div>
          )}
          {this.props.data.videoJson.fact5 && (
            <div className="pl-6 pr-10 pt-2 border-b-2 border-orange-800">
              {this.props.data.videoJson.fact4}
            </div>
          )}
          {this.props.data.videoJson.fact6 && (
            <div className="pl-6 pr-10 pt-2 border-b-2 border-orange-800">
              {this.props.data.videoJson.fact5}
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

export default DataTemplate;

export const pageQuery = graphql`
  query ($jsonId: String!) {
    videoJson(jsonId: { eq: $jsonId }) {
      jsonId
      name
      aka
      era
      format
      format2
      developedBy
      manufacturers
      market
      capacity
      size
      color
      encoding
      scanProcess
      tapeType
      tapeWidth
      hubType
      bandwidth
      fact1
      fact2
      fact3
      fact4
      fact5
    }
  }
`;
