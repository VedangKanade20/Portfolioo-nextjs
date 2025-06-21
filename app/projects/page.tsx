import projects from "@/components/data/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-6 py-12 bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-12">
        My <span className="text-purple-500">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
  <div key={index} className="border border-purple-600 p-4 rounded-md">
    <video
      src={project.video}
      autoPlay
      loop
      muted
      playsInline
      className="rounded-md mb-4 w-full"
    />
    <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
    <p className="text-sm text-gray-400 mb-2">{project.type}</p>
    <div className="flex gap-4">
      <a
        href={project.url}
        target="_blank"
        className="text-purple-400 underline"
      >
        Visit
      </a>
      {project.source && (
        <a
          href={project.source}
          target="_blank"
          className="text-purple-400 underline"
        >
          GitHub
        </a>
      )}
    </div>
  </div>
))}

      </div>
    </div>
  );
}
