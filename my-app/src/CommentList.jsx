import React, { useState } from "react";

const CommentList = ({ userId, onSubmit }) => {
  const [commentText, setCommentText] = useState("");

  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(commentText);

    setCommentText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Add a comment..."
          value={commentText}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentList;
