"use client";

import React, { useState } from "react";
import { FaPlay, FaRedo, FaServer, FaSearch } from "react-icons/fa";

export default function PlaygroundPage() {
  // Simulator State
  const [activeArch, setActiveArch] = useState<"cache" | "direct" | "async">("cache");
  const [simStep, setSimStep] = useState<number>(0);
  const [simulating, setSimulating] = useState<boolean>(false);
  const [latencyResult, setLatencyResult] = useState<string | null>(null);

  // Binary Search Interactive State
  const initialArray = [3, 7, 12, 19, 24, 31, 38, 45, 52, 61, 74, 83, 91, 99];
  const [target, setTarget] = useState<number>(38);
  const [low, setLow] = useState<number>(0);
  const [high, setHigh] = useState<number>(initialArray.length - 1);
  const [mid, setMid] = useState<number | null>(null);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);
  const [searchLog, setSearchLog] = useState<string[]>([]);
  const [searchDone, setSearchDone] = useState<boolean>(false);

  // Run Architecture Simulation
  const runSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setSimStep(1);
    setLatencyResult(null);

    // Sequence of steps
    setTimeout(() => setSimStep(2), 400); // Proxy
    setTimeout(() => setSimStep(3), 800); // App Service

    if (activeArch === "cache") {
      setTimeout(() => {
        setSimStep(4); // Redis Cache Hit
        setTimeout(() => {
          setSimStep(5);
          setLatencyResult("4ms (Cache HIT: Redis In-Memory Key • Zero DB Load)");
          setSimulating(false);
        }, 500);
      }, 1200);
    } else if (activeArch === "direct") {
      setTimeout(() => {
        setSimStep(4); // DB Query
        setTimeout(() => {
          setSimStep(5);
          setLatencyResult("148ms (Cache MISS: PostgreSQL B-Tree Index Scan & ACID Write)");
          setSimulating(false);
        }, 800);
      }, 1200);
    } else {
      setTimeout(() => {
        setSimStep(4); // Message Queue
        setTimeout(() => {
          setSimStep(5);
          setLatencyResult("12ms (Asynchronous Job Dispatched to Celery/Worker Pool)");
          setSimulating(false);
        }, 500);
      }, 1200);
    }
  };

  // Step Binary Search
  const stepBinarySearch = () => {
    if (searchDone) return;
    if (low > high) {
      setSearchLog((prev) => [...prev, `Target ${target} not found in array.`]);
      setSearchDone(true);
      return;
    }

    const currentMid = Math.floor((low + high) / 2);
    setMid(currentMid);
    const midVal = initialArray[currentMid];

    if (midVal === target) {
      setFoundIndex(currentMid);
      setSearchLog((prev) => [
        ...prev,
        `✓ Found ${target} at Index ${currentMid} (Low: ${low}, High: ${high}, Mid: ${currentMid})!`,
      ]);
      setSearchDone(true);
    } else if (midVal < target) {
      setSearchLog((prev) => [
        ...prev,
        `${midVal} < ${target} → Halving left space. New Low = ${currentMid + 1}`,
      ]);
      setLow(currentMid + 1);
    } else {
      setSearchLog((prev) => [
        ...prev,
        `${midVal} > ${target} → Halving right space. New High = ${currentMid - 1}`,
      ]);
      setHigh(currentMid - 1);
    }
  };

  const resetBinarySearch = (newTarget?: number) => {
    const t = newTarget !== undefined ? newTarget : target;
    setTarget(t);
    setLow(0);
    setHigh(initialArray.length - 1);
    setMid(null);
    setFoundIndex(null);
    setSearchLog([`Initialized Binary Search for Target = ${t}. Array Length: ${initialArray.length}`]);
    setSearchDone(false);
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Editorial Header */}
      <div className="mb-12 border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#8fc4ff] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#8fc4ff]">
              Interactive Systems & Code Sandbox
            </span>
          </div>
          <div className="flex items-baseline gap-3 mt-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
              playground
            </h1>
            <span className="font-mono text-xs sm:text-sm text-[#8fc4ff]/80">
              [ˈpleɪ.ɡraʊnd]
            </span>
          </div>
          <p className="mt-1 text-xs font-mono italic text-zinc-400">
            (noun / interactive engineering lab, latency simulator & algorithmic arena)
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl font-sans leading-relaxed">
            Test real-world distributed architectures, simulate cache-aside latency vs direct database queries, and step through algorithmic visualizations.
          </p>
        </div>

        <div className="font-mono text-xs text-zinc-500">
          EXPERIMENT LAB v1.0
        </div>
      </div>

      {/* SECTION 1: ARCHITECTURE & LATENCY SIMULATOR */}
      <section className="mb-16 rounded-2xl border border-white/10 bg-[#070709]/90 p-6 sm:p-8 backdrop-blur-xl shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/[0.08] pb-4 mb-6">
          <div className="flex items-center gap-2.5 text-[#8fc4ff]">
            <FaServer size={18} />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Distributed Request & Latency Simulator
            </h2>
          </div>
          <span className="font-mono text-xs text-zinc-400">
            SIMULATE MICROSERVICES PIPELINES
          </span>
        </div>

        {/* Architecture Mode Selector */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          <button
            onClick={() => {
              setActiveArch("cache");
              setSimStep(0);
              setLatencyResult(null);
            }}
            className={`px-4 py-2 rounded-lg font-mono text-xs transition-all border ${
              activeArch === "cache"
                ? "bg-[#3f7fd0] text-white border-[#8fc4ff] shadow-[0_0_15px_rgba(143,196,255,0.3)]"
                : "bg-white/[0.02] text-zinc-400 border-white/10 hover:text-white"
            }`}
          >
            Pattern 1: Cache-Aside (Spring Boot + Redis)
          </button>
          <button
            onClick={() => {
              setActiveArch("direct");
              setSimStep(0);
              setLatencyResult(null);
            }}
            className={`px-4 py-2 rounded-lg font-mono text-xs transition-all border ${
              activeArch === "direct"
                ? "bg-[#3f7fd0] text-white border-[#8fc4ff] shadow-[0_0_15px_rgba(143,196,255,0.3)]"
                : "bg-white/[0.02] text-zinc-400 border-white/10 hover:text-white"
            }`}
          >
            Pattern 2: Direct Relational ACID (PostgreSQL)
          </button>
          <button
            onClick={() => {
              setActiveArch("async");
              setSimStep(0);
              setLatencyResult(null);
            }}
            className={`px-4 py-2 rounded-lg font-mono text-xs transition-all border ${
              activeArch === "async"
                ? "bg-[#3f7fd0] text-white border-[#8fc4ff] shadow-[0_0_15px_rgba(143,196,255,0.3)]"
                : "bg-white/[0.02] text-zinc-400 border-white/10 hover:text-white"
            }`}
          >
            Pattern 3: Asynchronous Pipeline (FastAPI + Worker)
          </button>
        </div>

        {/* Simulation Visual Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-8">
          <div
            className={`rounded-xl border p-4 text-center transition-all duration-300 ${
              simStep >= 1
                ? "border-[#8fc4ff] bg-[#3f7fd0]/20 shadow-[0_0_20px_rgba(63,127,208,0.25)]"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">01. Origin</span>
            <p className="font-mono text-xs font-bold text-white">Next.js Client</p>
            <p className="text-[11px] text-zinc-400 mt-1">POST /api/tx</p>
          </div>

          <div
            className={`rounded-xl border p-4 text-center transition-all duration-300 ${
              simStep >= 2
                ? "border-[#8fc4ff] bg-[#3f7fd0]/20 shadow-[0_0_20px_rgba(63,127,208,0.25)]"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">02. Gateway</span>
            <p className="font-mono text-xs font-bold text-white">Nginx Proxy</p>
            <p className="text-[11px] text-zinc-400 mt-1">SSL / Load Balance</p>
          </div>

          <div
            className={`rounded-xl border p-4 text-center transition-all duration-300 ${
              simStep >= 3
                ? "border-[#8fc4ff] bg-[#3f7fd0]/20 shadow-[0_0_20px_rgba(63,127,208,0.25)]"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">03. Microservice</span>
            <p className="font-mono text-xs font-bold text-white">
              {activeArch === "async" ? "FastAPI Engine" : "Spring Boot 3"}
            </p>
            <p className="text-[11px] text-zinc-400 mt-1">RBAC / Validation</p>
          </div>

          <div
            className={`rounded-xl border p-4 text-center transition-all duration-300 ${
              simStep >= 4
                ? "border-[#8fc4ff] bg-[#3f7fd0]/20 shadow-[0_0_20px_rgba(63,127,208,0.25)]"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">04. Data Layer</span>
            <p className="font-mono text-xs font-bold text-white">
              {activeArch === "cache"
                ? "Redis L1 Cache"
                : activeArch === "direct"
                ? "PostgreSQL Cluster"
                : "Celery Queue / SQS"}
            </p>
            <p className="text-[11px] text-zinc-400 mt-1">
              {activeArch === "cache" ? "In-Memory RAM" : activeArch === "direct" ? "ACID Disk" : "Async Buffer"}
            </p>
          </div>
        </div>

        {/* Action & Result */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
          <button
            onClick={runSimulation}
            disabled={simulating}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#3f7fd0] text-white hover:bg-[#8fc4ff] hover:text-black px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(63,127,208,0.25)]"
          >
            <FaPlay size={10} />
            <span>{simulating ? "Processing Trace..." : "Fire Transaction Request"}</span>
          </button>

          {latencyResult && (
            <div className="font-mono text-xs text-[#8fc4ff] bg-[#3f7fd0]/10 border border-[#3f7fd0]/30 px-4 py-2 rounded-lg">
              ⏱ Measured Response: <strong className="text-white">{latencyResult}</strong>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE DSA ARENA (BINARY SEARCH) */}
      <section className="rounded-2xl border border-white/10 bg-[#070709]/90 p-6 sm:p-8 backdrop-blur-xl shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/[0.08] pb-4 mb-6">
          <div className="flex items-center gap-2.5 text-[#8fc4ff]">
            <FaSearch size={18} />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Algorithmic Arena: Binary Search O(log n)
            </h2>
          </div>
          <span className="font-mono text-xs text-zinc-400">
            DSA VISUALIZER
          </span>
        </div>

        <p className="text-sm text-zinc-300 font-sans mb-6">
          Select a target number and click <strong className="text-white">&ldquo;Step Algorithm&rdquo;</strong> to watch the pointers (<span className="text-[#8fc4ff]">Low</span>, <span className="text-yellow-400">Mid</span>, <span className="text-emerald-400">High</span>) divide and conquer the sorted space.
        </p>

        {/* Target Buttons */}
        <div className="flex items-center gap-2 flex-wrap mb-6">
          <span className="font-mono text-xs text-zinc-400">SELECT TARGET:</span>
          {[12, 38, 74, 91, 45].map((num) => (
            <button
              key={num}
              onClick={() => resetBinarySearch(num)}
              className={`px-3 py-1 rounded font-mono text-xs transition-all border ${
                target === num
                  ? "bg-[#3f7fd0] text-white border-[#8fc4ff]"
                  : "bg-white/[0.03] text-zinc-300 border-white/10 hover:text-white"
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Array Cells */}
        <div className="grid grid-cols-7 sm:grid-cols-14 gap-2 mb-6">
          {initialArray.map((val, idx) => {
            const isMid = idx === mid;
            const isLow = idx === low;
            const isHigh = idx === high;
            const isFound = idx === foundIndex;
            const isOutOfRange = idx < low || idx > high;

            return (
              <div
                key={idx}
                className={`relative flex flex-col items-center justify-center p-2 rounded-lg border font-mono text-xs transition-all duration-300 ${
                  isFound
                    ? "border-emerald-400 bg-emerald-500/20 text-white font-bold scale-105 shadow-[0_0_15px_rgba(52,211,153,0.4)]"
                    : isMid
                    ? "border-yellow-400 bg-yellow-400/20 text-yellow-200 font-bold scale-105"
                    : isOutOfRange
                    ? "border-white/5 bg-transparent text-zinc-600 opacity-40"
                    : "border-white/15 bg-white/[0.03] text-white"
                }`}
              >
                <span className="text-[10px] text-zinc-500 mb-0.5">{idx}</span>
                <span className="text-sm font-semibold">{val}</span>

                {/* Pointer tags */}
                <div className="flex gap-1 text-[9px] mt-1">
                  {isLow && <span className="text-[#8fc4ff] font-bold">L</span>}
                  {isMid && <span className="text-yellow-400 font-bold">M</span>}
                  {isHigh && <span className="text-emerald-400 font-bold">H</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls and Log */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
          <div className="flex gap-3">
            <button
              onClick={stepBinarySearch}
              disabled={searchDone}
              className="inline-flex items-center gap-2 rounded-lg bg-[#3f7fd0] text-white hover:bg-[#8fc4ff] hover:text-black px-4 py-2 font-mono text-xs font-semibold uppercase transition-all disabled:opacity-50"
            >
              <FaPlay size={9} />
              <span>Step Algorithm</span>
            </button>
            <button
              onClick={() => resetBinarySearch()}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white px-4 py-2 font-mono text-xs transition-all"
            >
              <FaRedo size={9} />
              <span>Reset</span>
            </button>
          </div>

          <div className="font-mono text-xs text-zinc-400">
            {searchDone ? "Search Complete" : `Searching target: ${target}`}
          </div>
        </div>

        {/* Log Stream */}
        <div className="mt-4 p-3 rounded-lg bg-black/60 border border-white/[0.06] font-mono text-xs text-zinc-300 max-h-32 overflow-y-auto space-y-1">
          {searchLog.map((log, lIdx) => (
            <div key={lIdx} className="text-zinc-300">
              <span className="text-[#8fc4ff]">&gt;</span> {log}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
