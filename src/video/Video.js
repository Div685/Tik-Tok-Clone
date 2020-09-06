import React, { useRef, useState } from "react";
import "../video/Video.css";
import VideoFooter from "../footer/VideoFooter";
import VideoSidebar from "../sidebar/VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    //if video is playing
    // stop it ...

    //if video is not playing
    //play it...
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={url}
        // "https://instagram.febb3-1.fna.fbcdn.net/v/t50.2886-16/117867053_380185409634574_3851027381229587151_n.mp4?_nc_ht=instagram.febb3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=KNWLGA2l2xAAX8g-gld&oe=5F5673F1&oh=15f71613b4bebfd20d78aa10c9892b30"
      ></video>

      <VideoFooter channel={channel} description={description} song={song} />
      {/* video__Footer */}
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
      {/* video__Sidebar */}
    </div>
  );
}

export default Video;
