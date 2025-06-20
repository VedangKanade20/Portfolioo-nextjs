"use client";

import React from "react";
import { ConfettiButton } from "./magicui/confetti";


const CopyEmailButton = () => {
  const handleClick = () => {
    navigator.clipboard.writeText("kanadevedang2003@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <button
      className="bg-transparent border w-fit text-white rounded-md"
      onClick={handleClick}
    >
      <ConfettiButton>Email</ConfettiButton>
    </button>
  );
};

export default CopyEmailButton;
