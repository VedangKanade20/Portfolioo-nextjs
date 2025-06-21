import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function Header() {
  return (
    <div className="flex items-center justify-start gap-4 bg-transparent w-[100%]  p-4  text-white  bg-opacity-50 backdrop-blur-md supports-backdrop-blur:dark:bg-black/10">
      <Link href="/">
        <Image
          src="/myPhoto.png"
          width={40}
          height={40}
          alt="Vedang Kanade"
          className="rounded-full"
        />
      </Link>
      <div className="flex flex-col">
        <p className="font-semibold text-lg">Vedang Kanade</p>
        <p className="text-sm text-gray-400">Software Engineer</p>
      </div>
    </div>
  );
}
