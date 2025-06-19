"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github: React.FC = () => {
  return (
    <div className="flex flex-col items-center pb-10">
      <h1 className="text-2xl font-bold pb-5 text-center">
        Days I <strong className="text-purple-500">Code</strong>
      </h1>
      <GitHubCalendar
        username="VedangKanade20"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </div>
  );
};

export default Github;
