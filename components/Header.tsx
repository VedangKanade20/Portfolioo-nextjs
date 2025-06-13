import Image from 'next/image';
import React from 'react';

export function Header() {
  return (
    <div className="flex items-center gap-4 bg-transparent w-[50%]  p-4  text-white ">
      <Image
        src="/myPhoto.png"
        width={40}
        height={40}
        alt="Vedang Kanade"
        className="rounded-full"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-xl">Vedang Kanade</p>
        <p className="text-md text-gray-400">Software Engineer</p>
      </div>
    </div>
  );
}
