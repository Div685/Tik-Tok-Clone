import React from "react";
import "./App.css";
import Video from "./video/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://instagram.febb3-1.fna.fbcdn.net/v/t50.2886-16/117867053_380185409634574_3851027381229587151_n.mp4?_nc_ht=instagram.febb3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=KNWLGA2l2xAAX8g-gld&oe=5F5673F1&oh=15f71613b4bebfd20d78aa10c9892b30"
          channel="div685"
          description="yoo it works"
          song="99 problems but react aint one"
          likes={123}
          messages={23}
          shares={345}
        />
        <Video
          url="https://instagram.febb3-1.fna.fbcdn.net/v/t50.2886-16/118760143_340370630733787_6587340506055042814_n.mp4?_nc_ht=instagram.febb3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=MjBYEhoCMbsAX9OxIC2&oe=5F57358E&oh=f5a8708fd0a9616251b8a06afbe7cb22"
          // url="https://instagram.febb3-1.fna.fbcdn.net/v/t50.2886-16/117867053_380185409634574_3851027381229587151_n.mp4?_nc_ht=instagram.febb3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=KNWLGA2l2xAAX8g-gld&oe=5F5673F1&oh=15f71613b4bebfd20d78aa10c9892b30"
          channel="div685"
          description="yoo its another video"
          song="99 problems but react aint one"
          likes={123}
          messages={23}
          shares={345}
        />
      </div>
    </div>
  );
}

export default App;
