import { GraduationCap, Heart } from "lucide-react";

export default function ExtraCards() {
  return (
    <div className="flex flex-wrap gap-6 justify-center max-w-4xl mx-auto">
      {/* Education & Qualification */}
      <div className="group relative bg-[#070709]/90 rounded-2xl p-6 w-full max-w-md border border-white/10 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-[#3f7fd0]/50 hover:shadow-[0_12px_35px_rgba(63,127,208,0.12)]">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3f7fd0]/10 border border-[#3f7fd0]/30 text-[#8fc4ff]">
            <GraduationCap className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-lg font-serif">
            Education & Qualification
          </h3>
        </div>
        <p className="text-zinc-300 text-sm leading-relaxed">
          Final-year Master of Computer Applications (MCA) candidate. Completed B.Sc in Information Technology from Guru Nanak Khalsa College with an average of 8.4 CGPA (8.9 CGPA in final semester).
        </p>
      </div>

      {/* Interests & Hobbies */}
      <div className="group relative bg-[#070709]/90 rounded-2xl p-6 w-full max-w-md border border-white/10 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-[#3f7fd0]/50 hover:shadow-[0_12px_35px_rgba(63,127,208,0.12)]">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3f7fd0]/10 border border-[#3f7fd0]/30 text-[#8fc4ff]">
            <Heart className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-white text-lg font-serif">
            Interests & Pursuit
          </h3>
        </div>
        <p className="text-zinc-300 text-sm leading-relaxed">
          <span className="text-[#8fc4ff] font-semibold">Technical:</span> Distributed Systems, Microservices Architecture, Cloud DevOps & Generative AI.
          <br />
          <span className="text-[#8fc4ff] font-semibold">Active:</span> Football, Cricket, and Fitness Training.
        </p>
      </div>
    </div>
  );
}
