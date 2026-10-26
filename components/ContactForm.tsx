"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={() => setSubmitted(true)}
      action="https://formspree.io/f/mdkzleez"
      method="POST"
      className="w-full max-w-xl mx-auto space-y-4 rounded-2xl border border-white/10 bg-[#070709]/90 p-6 sm:p-8 backdrop-blur-xl shadow-lg"
    >
      <div>
        <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2.5 border border-white/10 rounded-lg bg-white/[0.02] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#8fc4ff] focus:ring-1 focus:ring-[#8fc4ff] transition-all"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="your.email@example.com"
          required
          className="w-full px-4 py-2.5 border border-white/10 rounded-lg bg-white/[0.02] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#8fc4ff] focus:ring-1 focus:ring-[#8fc4ff] transition-all"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Tell me about your project, timeline, or inquiry..."
          rows={5}
          required
          className="w-full px-4 py-2.5 border border-white/10 rounded-lg bg-white/[0.02] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#8fc4ff] focus:ring-1 focus:ring-[#8fc4ff] transition-all resize-y"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center bg-[#3f7fd0] text-white hover:bg-[#8fc4ff] hover:text-black px-6 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_0_20px_rgba(63,127,208,0.25)]"
      >
        Send Message →
      </button>

      {submitted && (
        <p className="text-[#8fc4ff] font-mono text-xs pt-2">
          ✓ Message transmitted successfully. I will get back to you shortly.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
