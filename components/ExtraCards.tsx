import { GraduationCap, Briefcase, Heart } from "lucide-react";

export default function ExtraCards() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {/* Education & Qualification */}
      <div className="relative bg-[#1a1a1a] rounded-xl p-4 w-full max-w-sm border border-[#2a2a2a] shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="w-5 h-5 text-white" />
          <h3 className="font-bold text-white text-lg">Education & Qualification</h3>
        </div>
        <p className="text-gray-300 text-sm">
          I am currently in my 2nd and final year of Masters in Computer Applications.
          I completed my B.Sc in IT from Guru Nanak Khalsa College with an average of 8.4 CGPA
          and scored 8.9 in my last semester.
        </p>
      </div>

      {/* Experience */}
      <div className="relative bg-[#1a1a1a] rounded-xl p-4 w-full max-w-sm border border-[#2a2a2a] shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="w-5 h-5 text-white" />
          <h3 className="font-bold text-white text-lg">Experience</h3>
        </div>
        <p className="text-gray-300 text-sm">
          <strong>RST Forum</strong><br />
          Full Stack JavaScript Web Development trainee.<br />
          Trained in MERN stack, designed and developed visually appealing web apps,
          and collaborated with seniors to learn best practices for building full-fledged applications.
        </p>
      </div>

      {/* Interests & Hobbies */}
      <div className="relative bg-[#1a1a1a] rounded-xl p-4 w-full max-w-sm border border-[#2a2a2a] shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-white" />
          <h3 className="font-bold text-white text-lg">Interests & Hobbies</h3>
        </div>
        <p className="text-gray-300 text-sm">
          <strong>Interests:</strong> Web Development, DevOps, Gen AI.<br />
          <strong>Hobbies:</strong> Outdoor sports like cricket, football, volleyball, and gym workouts.
        </p>
      </div>
    </div>
  );
}
