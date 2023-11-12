import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
    }
  };

  return (
    <div>
      <button onClick={handleLike}>
        <FontAwesomeIcon icon={faHeart} color={isLiked ? "red" : "black"} />
      </button>
      <span>{likes}</span>
    </div>
  );
}

export default LikeButton;
