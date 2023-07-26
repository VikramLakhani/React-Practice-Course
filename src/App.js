import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import img1 from "./img/img1.avif";
import img2 from "./img/img2.avif";
import img3 from "./img/img3.avif";
import ApprovalCard from "./ApprovalCard";
import SegmentComp from "./SegmentComp";
//Season App
// import SeasonIndex from "./Season/Index";
// pics App
import PicsApp from "./component/Pics App/PicsApp";
// Videos App
import VideoApp from "../src/component/videosApp/VideoApp";

function App() {
  return (
    <div className="ui container comments">
      {/* <ApprovalCard>
        <h4 style={{ color: "orangered" }}>Warning</h4>
        <div>Are you sure, you want to do this?</div>
        <CommentDetail
          author="Sam"
          blog="Nice blog post!"
          image={img1}
          timeAgo="Today at 5:54Pm"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          blog="Nice blog post!"
          image={img1}
          timeAgo="Today at 5:54Pm"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          blog="Bad blog post!"
          image={img2}
          timeAgo="Today at 3:25AM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="jane"
          blog="Good blog post!"
          image={img3}
          timeAgo="Yesterday at 6:35PM"
        />
      </ApprovalCard>
      <SegmentComp /> */}

      {/* Season App -> */}
      {/* <SeasonIndex /> */}
      {/* <PicsApp /> */}
      <VideoApp />
    </div>
  );
}

export default App;
