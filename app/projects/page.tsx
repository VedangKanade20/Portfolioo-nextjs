import projects from "@/components/data/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-6 py-12 bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-12">
        My <span className="text-purple-500">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
       {projects.map((project, index) => (
  <div
    key={index}
    className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-purple-800/30 transition-shadow duration-300"
  >
    <video
      src={project.video}
      autoPlay
      loop
      muted
      playsInline
      className="rounded-lg mb-4 w-full"
    />
    <h2 className="text-xl font-semibold mb-1 text-white">{project.title}</h2>
    <p className="text-sm text-gray-400 mb-4">{project.type}</p>
    <div className="flex gap-4">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300 underline transition-colors"
      >
        Visit
      </a>
      {project.source && (
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 underline transition-colors"
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
