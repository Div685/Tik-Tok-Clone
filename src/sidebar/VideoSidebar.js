import React, { useState } from "react";
import "../sidebar/VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";

import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar() {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <FavoriteIcon fontSize="large" />
        <p>100</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>100</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>100</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
