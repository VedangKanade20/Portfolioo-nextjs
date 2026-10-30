export interface Project {
  title: string;
  type: string;
  description: string;
  tech?: string[];
  video: string;
  url: string;
  source?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "FinSettle Core",
    type: "Java 17 / BFSI Settlement Engine",
    description:
      "Enterprise banking settlement and ATM multi-way financial reconciliation engine. Engineered with Java 17, Spring Boot 3, Hibernate/JPA, and PostgreSQL with BouncyCastle cryptographic verification and automated ledger discrepancy resolution.",
    tech: ["Java 17", "Spring Boot 3", "Hibernate", "PostgreSQL", "BouncyCastle", "REST APIs"],
    video: "/Vedang_Kanade_screenrecording.mp4",
    url: "https://github.com/VedangKanade20/finsettle-banking-reconciliation-engine",
    source: "https://github.com/VedangKanade20/finsettle-banking-reconciliation-engine",
    featured: true,
  },
  {
    title: "QuantIQ Finance AI",
    type: "Java Backend / AI & Anomaly Analytics",
    description:
      "High-throughput transactional risk pipeline combining Java 21 Spring Boot microservices, Kafka event streaming, and embedded ML anomaly scoring models for sub-second banking transaction anomaly detection.",
    tech: ["Java 21", "Spring Boot", "Kafka", "Machine Learning", "Redis", "Docker"],
    video: "/crewcanvasvideo.mp4",
    url: "https://github.com/VedangKanade20/quantiq-ai-fraud-detection",
    source: "https://github.com/VedangKanade20/quantiq-ai-fraud-detection",
    featured: true,
  },
  {
    title: "NeuralDoc AI Research Assistant",
    type: "AI / Academic Research Assistant",
    description:
      "Intelligent research paper synthesis and RAG retrieval assistant for academic researchers. Combines Next.js, Python FastAPI, semantic vector search, and citation graphs — recognized at University of Mumbai Avishkar Research Convention.",
    tech: ["Python", "FastAPI", "Next.js", "Vector RAG", "OpenAI / LLMs", "PostgreSQL"],
    video: "/careconvideo.mp4",
    url: "https://github.com/VedangKanade20/neuraldoc-ai-research-assistant",
    source: "https://github.com/VedangKanade20/neuraldoc-ai-research-assistant",
    featured: true,
  },
  {
    title: "Crew Canvas",
    type: "Team Collaboration Tool",
    description:
      "Full-featured collaborative whiteboard and team workspace with real-time multi-cursor synchronization, canvas persistence, and instant room sharing via WebSockets.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Node.js"],
    video: "/crewcanvasvideo.mp4",
    url: "https://crew-canvas-own-client.vercel.app/",
    source: "https://github.com/VedangKanade20/crew-canvas-own-client",
  },
  {
    title: "Care Connect",
    type: "NGO-Donor Platform",
    description:
      "Full-stack charity and NGO-donor platform with live inventory auditing and transparency metrics. Secured 2nd Runner-up at NMITD Mini Project Competition.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    video: "/careconvideo.mp4",
    url: "https://care-connect-eight-theta.vercel.app/",
    source: "https://github.com/VedangKanade20/Care-Connect",
  },
  {
    title: "Blogosphere",
    type: "Publishing Platform",
    description:
      "High-performance editorial blog and technical publishing app with rich-text markdown rendering, categorization, and responsive reading view.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    video: "/blogovideo.mp4",
    url: "https://blogossphere-blogapp.netlify.app/",
    source: "https://github.com/VedangKanade20/BlogoSphere-A-Blog-Web-App",
  },
  {
    title: "Chat Buzz",
    type: "Real-time Messaging App",
    description:
      "Real-time chat platform with instant message delivery, room creation, online presence status, and media attachments.",
    tech: ["React.js", "Socket.io", "Node.js", "Express.js"],
    video: "/chatbuzzvideo.mp4",
    url: "https://chat-buzz-beige.vercel.app/",
    source: "https://github.com/VedangKanade20/Chat-Buzz",
  },
  {
    title: "Salon Management System",
    type: "Enterprise Resource Platform",
    description:
      "Appointment scheduling and staff management application for service businesses with automated slot allocation and reporting.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    video: "/salonmanvideo.mp4",
    url: "https://salon-managment.vercel.app/",
    source: "https://github.com/VedangKanade20/Salon-managment",
  },
  {
    title: "RST Store",
    type: "E-Commerce App",
    description:
      "Full-featured e-commerce catalog with cart state management, checkout simulation, and product filtering.",
    tech: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
    video: "/rststorevideo.mp4",
    url: "https://rststoree.netlify.app/",
    source: "https://github.com/VedangKanade20/RSt-Store-E-Com",
  },
];

export default projects;
