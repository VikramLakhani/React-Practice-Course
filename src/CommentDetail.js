import React from "react";

const CommentDetail = (props) => {
  //   console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avtar">
        <img
          src={props.image}
          alt="avtar"
          style={{ width: "40px", height: "40px", borderRadius: "20px" }}
        />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.blog}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
