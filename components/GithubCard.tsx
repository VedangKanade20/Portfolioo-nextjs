"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";

const blueTheme = {
  light: ["#161b22", "#1d3e66", "#2b5f9e", "#3f7fd0", "#8fc4ff"],
  dark: ["#12161f", "#1d3e66", "#2b5f9e", "#3f7fd0", "#8fc4ff"],
};

const Github: React.FC = () => {
  return (
    <div className="flex flex-col items-center pb-10 rounded-2xl border border-white/10 bg-[#070709]/90 p-6 sm:p-8 backdrop-blur-xl">
      <div className="flex items-center gap-2 mb-2">
        <span className="h-2 w-2 rounded-full bg-[#8fc4ff]" />
        <span className="font-mono text-xs uppercase tracking-widest text-[#8fc4ff]">
          Activity Telemetry
        </span>
      </div>
      <h3 className="text-2xl font-bold pb-6 text-center font-serif text-white">
        Days I <span className="text-[#8fc4ff]">Code</span>
      </h3>
      <div className="w-full flex justify-center overflow-x-auto py-2">
        <GitHubCalendar
          username="VedangKanade20"
          blockSize={11}
          blockMargin={4}
          fontSize={12}
          theme={blueTheme}
        />
      </div>
    </div>
  );
};

export default Github;
