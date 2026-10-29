"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaTerminal, FaArrowLeft } from "react-icons/fa";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
  time: string;
}

export default function TerminalPage() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const getTimestamp = () => {
    return new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  useEffect(() => {
    // Initial banner
    setHistory([
      {
        command: "init",
        time: getTimestamp(),
        output: (
          <div className="space-y-2 text-zinc-300">
            <pre className="text-[#8fc4ff] font-mono text-[10px] sm:text-xs leading-none">
{`
 __     _______ ____    _    _   _  ____ 
 \\ \\   / / ____|  _ \\  / \\  | \\ | |/ ___|
  \\ \\ / /|  _| | | | |/ _ \\ |  \\| | |  _ 
   \\ V / | |___| |_| / ___ \\| |\\  | |_| |
    \\_/  |_____|____/_/   \\_\\_| \\_|\\____|
`}
            </pre>
            <p className="text-white font-semibold">
              Vedang Kanade — Interactive Engineering Terminal [v2.4.0]
            </p>
            <p className="text-zinc-400 text-xs">
              Host: Parel, Mumbai [18.9934° N, 72.8397° E] • Runtime: Node.js / Vercel Edge
            </p>
            <p className="text-[#8fc4ff] text-xs">
              Type <span className="text-white font-bold underline">help</span> to view available commands, or tap the quick pills below.
            </p>
          </div>
        ),
      },
    ]);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    const parts = lower.split(" ");
    const cmd = parts[0];
    const args = parts.slice(1);

    setCommandHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    let result: React.ReactNode = null;

    switch (cmd) {
      case "help":
        result = (
          <div className="space-y-1 text-xs">
            <p className="text-[#8fc4ff] font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-1 text-zinc-300">
              <div><strong className="text-white">about</strong> - Background, origin & core focus</div>
              <div><strong className="text-white">skills</strong> - Multi-runtime stack tree</div>
              <div><strong className="text-white">fintech</strong> - Banking & reconciliation experience</div>
              <div><strong className="text-white">projects</strong> - List of shipped platforms</div>
              <div><strong className="text-white">location</strong> - Parel, Mumbai coordinates & transit</div>
              <div><strong className="text-white">matrix</strong> - Toggle cyberpunk visual effect</div>
              <div><strong className="text-white">sudo hire</strong> - Execute recruitment protocol</div>
              <div><strong className="text-white">contact</strong> - Reach out via Email or LinkedIn</div>
              <div><strong className="text-white">clear</strong> - Clear terminal window</div>
            </div>
          </div>
        );
        break;

      case "about":
        result = (
          <div className="space-y-2 text-xs text-zinc-300 leading-relaxed">
            <p>
              <strong className="text-white">Vedang Kanade:</strong> Full Stack Software Developer with hands-on experience building and maintaining web applications, backend services, and business software.
            </p>
            <p>
              Final-year Master of Computer Applications (MCA) student with a B.Sc in Information Technology (8.4 CGPA). Passionate about writing clean, maintainable code, DSA, and resilient system design.
            </p>
          </div>
        );
        break;

      case "skills":
        result = (
          <div className="space-y-1.5 text-xs font-mono text-zinc-300">
            <p className="text-[#8fc4ff]">├── [01] FRONTEND: React.js, Next.js, TypeScript, Tailwind, Zustand, Motion</p>
            <p className="text-[#8fc4ff]">├── [02] BACKEND:</p>
            <p className="pl-4 text-zinc-400">│   ├── Java Full Stack: Spring Boot 3, Spring Security, Hibernate, Maven</p>
            <p className="pl-4 text-zinc-400">│   ├── JS/TS: Node.js, Express, Next.js Server API, NestJS, WebSockets</p>
            <p className="pl-4 text-zinc-400">│   ├── Python: FastAPI (AsyncIO), Django, Flask, Celery</p>
            <p className="pl-4 text-zinc-400">│   └── C# (.NET 8): ASP.NET Core, EF Core, LINQ</p>
            <p className="text-[#8fc4ff]">├── [03] DATABASES: PostgreSQL, MongoDB, Redis (In-Memory Cache), MySQL</p>
            <p className="text-[#8fc4ff]">├── [04] DEVOPS: Docker, Kubernetes, AWS (EC2/S3), Nginx, GitHub Actions</p>
            <p className="text-[#8fc4ff]">└── [05] TOOLS: Git, GitHub, Postman, VS Code, IntelliJ IDEA, Linux CLI</p>
          </div>
        );
        break;

      case "fintech":
      case "banking":
        result = (
          <div className="space-y-2 text-xs text-zinc-300">
            <p className="text-[#8fc4ff] font-semibold">
              FINTECH & BANKING SYSTEMS EXPOSURE:
            </p>
            <p>
              Gaining exposure to transaction-oriented workflows, ATM multi-way settlement reconciliation, automated file downloader security pipelines, cryptographic signatures, and role-based access control (RBAC).
            </p>
            <p className="text-zinc-400">
              Principles applied: ACID transaction guarantees, idempotent endpoints, zero-data-loss architecture, and p95 latency reduction.
            </p>
          </div>
        );
        break;

      case "projects":
        result = (
          <div className="space-y-2 text-xs">
            <p className="text-[#8fc4ff] font-semibold">SELECTED SHIPPED PLATFORMS:</p>
            <div className="space-y-1 text-zinc-300 font-mono">
              <p>• <strong className="text-white">Crew Canvas:</strong> Real-time Team Collaboration Tool (Next.js / WebSockets)</p>
              <p>• <strong className="text-white">Care Connect:</strong> NGO-Donor Platform with Inventory Auditing (MERN)</p>
              <p>• <strong className="text-white">Blogosphere:</strong> High-Performance Technical Publishing Platform</p>
              <p>• <strong className="text-white">Chat Buzz:</strong> Instant Real-Time Messaging App</p>
              <p>• <strong className="text-white">Salon Management:</strong> Resource & Appointment Scheduling System</p>
            </div>
            <p className="text-zinc-400 pt-1">
              Visit <Link href="/projects" className="text-[#8fc4ff] underline">/projects</Link> to inspect video demos and source repos.
            </p>
          </div>
        );
        break;

      case "location":
      case "mumbai":
      case "parel":
        result = (
          <div className="space-y-1.5 text-xs text-zinc-300">
            <p><strong className="text-white">Base:</strong> Parel, Mumbai, Maharashtra, India [400012]</p>
            <p><strong className="text-white">Coordinates:</strong> 18.9934° N, 72.8397° E</p>
            <p><strong className="text-white">Transit:</strong> Central & Western Mumbai lines, close to BKC and Lower Parel.</p>
            <p><strong className="text-white">Availability:</strong> Open to local Mumbai opportunities, hybrid, and remote teams.</p>
          </div>
        );
        break;

      case "sudo":
        if (args[0] === "hire" || args[0] === "hire-vedang") {
          result = (
            <div className="space-y-2 text-xs border border-[#8fc4ff]/40 bg-[#3f7fd0]/10 p-3 rounded-lg text-zinc-200">
              <p className="text-[#8fc4ff] font-bold text-sm">
                🎉 ROOT PRIVILEGES GRANTED: HIRING PROTOCOL ACTIVATED!
              </p>
              <p>
                Vedang Kanade is available for Software Engineering opportunities (Full Stack / Backend).
              </p>
              <p>
                Direct contact: <a href="mailto:kanadevedang2003@gmail.com" className="text-white underline">kanadevedang2003@gmail.com</a>
                <br />
                LinkedIn: <a href="https://in.linkedin.com/in/vedang-kanade-598a05276" target="_blank" className="text-[#8fc4ff] underline">in.linkedin.com/in/vedang-kanade-598a05276</a>
              </p>
            </div>
          );
        } else {
          result = <p className="text-red-400 text-xs">sudo: command not found or invalid target. Try `sudo hire`.</p>;
        }
        break;

      case "matrix":
        setIsMatrixActive((prev) => !prev);
        result = (
          <p className="text-emerald-400 text-xs">
            {isMatrixActive ? "Matrix visual mode deactivated." : "Matrix visual mode ACTIVATED. Enjoy the cyberpunk ambiance."}
          </p>
        );
        break;

      case "contact":
        result = (
          <div className="space-y-1 text-xs text-zinc-300 font-mono">
            <p>Email: <a href="mailto:kanadevedang2003@gmail.com" className="text-[#8fc4ff] underline">kanadevedang2003@gmail.com</a></p>
            <p>LinkedIn: <a href="https://in.linkedin.com/in/vedang-kanade-598a05276" target="_blank" className="text-[#8fc4ff] underline">vedang-kanade-598a05276</a></p>
            <p>GitHub: <a href="https://github.com/vedangkanade20" target="_blank" className="text-[#8fc4ff] underline">github.com/vedangkanade20</a></p>
            <p>Twitter: <a href="https://x.com/VedangKanade" target="_blank" className="text-[#8fc4ff] underline">@VedangKanade</a></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        result = (
          <p className="text-red-400 text-xs">
            command not found: {raw}. Type <span className="text-white underline">help</span> for a list of valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: raw,
        time: getTimestamp(),
        output: result,
      },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    }
  };

  const quickCommands = ["help", "about", "skills", "fintech", "projects", "location", "sudo hire", "matrix", "clear"];

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col font-mono relative">
      {/* Matrix Backdrop if active */}
      {isMatrixActive && (
        <div className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] animate-pulse" />
      )}

      {/* Top Navigation Row */}
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#8fc4ff] transition-colors"
        >
          <FaArrowLeft size={10} />
          <span>Exit Terminal</span>
        </Link>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span>SESSION: ACTIVE</span>
        </div>
      </div>

      {/* Terminal Window Container */}
      <div className="relative z-10 flex-1 flex flex-col rounded-2xl border border-white/15 bg-[#050508]/95 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(63,127,208,0.15)] backdrop-blur-2xl overflow-hidden min-h-[550px]">
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-zinc-400 font-semibold flex items-center gap-1.5">
              <FaTerminal size={11} className="text-[#8fc4ff]" />
              vedang@parel-mumbai:~ (zsh)
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px] text-zinc-500">
            <span>UTF-8</span>
            <span>x86_64</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          className="flex-1 p-5 overflow-y-auto space-y-5 text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              {item.command !== "init" && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#8fc4ff]">vedang@mumbai:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                  <span className="text-zinc-600 ml-auto text-[10px]">{item.time}</span>
                </div>
              )}
              <div className="pl-0 sm:pl-3">{item.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-2 text-xs sm:text-sm">
            <span className="text-[#8fc4ff] whitespace-nowrap">vedang@mumbai:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              className="flex-1 bg-transparent text-white focus:outline-none font-mono caret-[#8fc4ff]"
              placeholder="type a command..."
            />
          </div>
          <div ref={endRef} />
        </div>

        {/* Quick Command Suggestion Bar */}
        <div className="p-3 bg-white/[0.02] border-t border-white/10 flex flex-wrap items-center gap-2 select-none">
          <span className="text-[11px] text-zinc-500">QUICK CMDS:</span>
          {quickCommands.map((qCmd) => (
            <button
              key={qCmd}
              onClick={() => handleCommand(qCmd)}
              className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-xs text-zinc-300 hover:text-white hover:border-[#8fc4ff] hover:bg-[#3f7fd0]/20 transition-all font-mono"
            >
              {qCmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
