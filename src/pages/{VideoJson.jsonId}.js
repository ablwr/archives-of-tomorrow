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
        <div className="grid grid-cols-3 gap-2 m-4 border-2 text-lg border-orange-800">
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              AKA
            </span>
            <div className="pl-10">{this.props.data.videoJson.aka}</div>
          </div>
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              Era
            </span>
            <div className="pl-10">{this.props.data.videoJson.era}</div>
          </div>
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              Format
            </span>
            <div className="pl-10">{this.props.data.videoJson.format}</div>
          </div>
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              Format2
            </span>
            <div className="pl-10">{this.props.data.videoJson.format2}</div>
          </div>
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              Developed by
            </span>
            <div className="pl-10">{this.props.data.videoJson.developedBy}</div>
          </div>
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              Manufacturers
            </span>
            <div className="pl-10">
              {this.props.data.videoJson.manufacturers}
            </div>
          </div>
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              Market
            </span>
            <div className="pl-10">{this.props.data.videoJson.market}</div>
          </div>
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              (Max) Capacity
            </span>
            <div className="pl-10">{this.props.data.videoJson.capacity}</div>
          </div>
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              Size
            </span>
            <div className="pl-10">{this.props.data.videoJson.size}</div>
          </div>

          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              Color
            </span>
            <div className="pl-10">{this.props.data.videoJson.color}</div>
          </div>
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              Encoding
            </span>
            <div className="pl-10">{this.props.data.videoJson.encoding}</div>
          </div>
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              Scan Process
            </span>
            <div className="pl-10">{this.props.data.videoJson.scanProcess}</div>
          </div>
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              Tape type
            </span>
            <div className="pl-10">{this.props.data.videoJson.tapeType}</div>
          </div>
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              Tape width
            </span>
            <div className="pl-10">{this.props.data.videoJson.tapeWidth}</div>
          </div>
          <div className="border-r-2 border-b-2 border-orange-800">
            <span className="relative top-0 left-2 text-xs uppercase text-orange-900">
              Bandwidth
            </span>
            <div className="pl-10">{this.props.data.videoJson.bandwidth}</div>
          </div>
        </div>
        <div className="grid grid-cols-1 m-4 border-2 border-orange-800">
          <div className="uppercase relative top-0 left-2 text-lg text-orange-900">
            Fun facts
          </div>
          <div className="pl-10 pr-10 pt-2 border-b-2 border-orange-800">
            {this.props.data.videoJson.fact1}
          </div>
          <div className="pl-10 pr-10 pt-2 border-b-2 border-orange-800">
            {this.props.data.videoJson.fact2}
          </div>
          <div className="pl-10 pr-10 pt-2 border-b-2 border-orange-800">
            {this.props.data.videoJson.fact3}
          </div>
          <div className="pl-10 pr-10 pt-2 border-b-2 border-orange-800">
            {this.props.data.videoJson.fact4}
          </div>
          <div className="pl-10 pr-10 pt-2 border-b-2 border-orange-800">
            {this.props.data.videoJson.fact4}
          </div>
        </div>
      </Layout>
    );
  }
}

export default DataTemplate;

export const pageQuery = graphql`
  query ($jsonId: String!) {
    # Select the post which equals this id.
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
    }
  }
`;
