import React, { useRef, useState } from "react";
import "../video/Video.css";
import VideoFooter from "../footer/VideoFooter";
import VideoSidebar from "../sidebar/VideoSidebar";

function Video() {
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
        src="https://instagram.febb3-1.fna.fbcdn.net/v/t50.2886-16/118382465_310650053691689_5183861259789365281_n.mp4?_nc_ht=instagram.febb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=4PpC0OtcNSMAX_Rpkt0&oe=5F53E1D5&oh=ad0938326a14b10fb4a30b049fdaa4f7"
      ></video>

      <VideoFooter />
      {/* video__Footer */}
      <VideoSidebar />
      {/* video__Sidebar */}
    </div>
  );
}

export default Video;
