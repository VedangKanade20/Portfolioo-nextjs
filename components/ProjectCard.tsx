import Image from "next/image";
import React from "react";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  stack: string[];
};

export const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, stack }) => {
  return (
    <div className="bg-[#1a1a1a] text-white p-4 rounded-xl shadow-md max-w-sm hover:shadow-lg transition">
      
    <div className="overflow-hidden rounded-md mb-3">
      <Image
        src={image}
        alt={title}
        className="rounded-md object-cover w-full h-40"
        width={400}
        height={160}
        style={{ objectFit: "cover" }}
      />
    </div>
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-sm mb-3 text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-[#2e2e2e] rounded-md text-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
