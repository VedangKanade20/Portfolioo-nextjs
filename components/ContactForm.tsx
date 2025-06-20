
"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={() => setSubmitted(true)}
      action="https://formspree.io/f/mdkzleez" // 
      method="POST"
      className="w-full max-w-xl mx-auto space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
      >
        Send Message
      </button>

      {submitted && (
        <p className="text-green-400 pt-2">
          ✅ Message sent! You’ll hear from me soon.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
