import React from "react";
import Segment from "./Segment";

const SegmentComp = () => {
  return (
    <div>
      <Segment>
        <div className="ui icon header">
          <i className="pdf file outline icon"></i>
          No documents are listed for this customer.
        </div>
        <div className="ui primary button">Add Document</div>
        {/* </Segment>
      <Segment> */}
        <h4 className="ui header">For your Information</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          molestiae aliquam laborum expedita hic vel ad? Sequi, veritatis
          placeat numquam, itaque minima dignissimos laborum maiores
          reprehenderit modi ut cumque culpa.
        </p>
      </Segment>
    </div>
  );
};

export default SegmentComp;
