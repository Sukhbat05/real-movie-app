"use client";
import { Videos } from "../../type";
import YouTube, { YouTubeProps } from "react-youtube";

const VideoPlayer = ({ videos }: Videos) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event: any) => {
    event.target.pauseVideo();
  };
  const opts = {
    height: "428px",
    width: "100%",
  };
  return (
    <div>
      <div className="w-[760px] h-107">
        {videos?.map((video: any) => (
          <div
            key={video?.id}
            className="border border-gray-600 rounded-md w-full overflow-hidden relative"
          >
            <YouTube videoId={video?.key} onReady={onPlayerReady} opts={opts} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
