"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github: React.FC = () => {
  return (
    <div className="flex flex-col items-center pb-10">
      <h1 className="text-2xl font-bold pb-5 text-center">
        Days I <strong className="text-green-400">Code</strong>
      </h1>
      <GitHubCalendar
        username="VedangKanade20"
        blockSize={10}
        blockMargin={3}
        fontSize={12}
      />
    </div>
  );
};

export default Github;
