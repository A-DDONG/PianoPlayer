import React, { useState, useEffect } from "react";
import "./App.css";

const videoList = [
  {
    title: "죽는 날까지 하늘을 우러러",
    videoId: "a8uPDppckQk",
  },
  {
    title: "한 점 부끄럼이 없기를,",
    videoId: "pCOBmmJARPE",
  },
  {
    title: "잎새에 이는 바람에도",
    videoId: "1BKATk8hGTU",
  },
  {
    title: "나는 괴로워했다.",
    videoId: "R9Eh8NLO03g",
  },
  {
    title: "별을 노래하는 마음으로",
    videoId: "vZ_oT0p113I",
  },
  {
    title: "모든 죽어 가는 것을 사랑해야지",
    videoId: "9cXGI4E5Ll4",
  },
  {
    title: "그리고 나한테 주어진 길을",
    videoId: "kkFtJIfa4_s",
  },
  {
    title: "걸어가야겠다.",
    videoId: "pkr48S22zH0",
  },
  {
    title: "오늘 밤에도 별이 바람에 스치운다.",
    videoId: "1dwkGnH7f7M",
  },
].map((video) => ({
  ...video,
  thumbnail: `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`,
}));

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleVideoSelect = (videoId, index) => {
    console.log("Video selected:", videoId, "Index:", index); // 로그 추가
    setSelectedVideo(videoId);
    setSelectedIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp") {
        setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (e.key === "ArrowDown") {
        setSelectedIndex((prevIndex) =>
          Math.min(prevIndex + 1, videoList.length - 1)
        );
      } else if (e.key === "Enter") {
        setSelectedVideo(videoList[selectedIndex].videoId);
      }
    };

    // selectedIndex가 변경될 때마다 selectedVideo도 변경
    setSelectedVideo(videoList[selectedIndex].videoId);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <div className="App">
      <div className="left-container">
        <ul>
          {videoList.map((video, index) => (
            <li
              key={index}
              onClick={() => handleVideoSelect(video.videoId, index)}
              className={selectedVideo === video.videoId ? "selected" : ""}
            >
              <img src={video.thumbnail} alt={`${video.title} 썸네일`} />
              <span>{video.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="right-container">
        {selectedVideo && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default App;
