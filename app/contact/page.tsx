import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Collaboration | Vedang Kanade",
  description: "Get in touch with Vedang Kanade for software engineering opportunities, contract work, or technical collaboration.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Editorial Header */}
      <div className="mb-12 border-b border-white/10 pb-6 text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <span className="h-2 w-2 rounded-full bg-[#8fc4ff]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#8fc4ff]">
            Inquiries & Communication
          </span>
        </div>
        <div className="flex items-baseline gap-3 justify-center sm:justify-start mt-2">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
            contact
          </h1>
          <span className="font-mono text-xs sm:text-sm text-[#8fc4ff]/80">
            [ˈkɒn.tækt]
          </span>
        </div>
        <p className="mt-1 text-xs font-mono italic text-zinc-400">
          (noun / direct channel for architectural consultation & roles)
        </p>
        <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
          Have an open engineering role, freelance project, or system design to discuss? Drop a message below and I will respond promptly.
        </p>
      </div>

      <div className="space-y-12">
        <ContactForm />
        <SocialLinks />
      </div>
    </div>
  );
}
