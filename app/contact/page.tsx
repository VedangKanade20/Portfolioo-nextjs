import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 px-6 flex flex-col items-center text-white bg-[#121212]">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="text-center max-w-xl mb-10 text-gray-400">
        Got a project idea, collaboration request, or just want to say hi? Fill out the form below!
      </p>
      <ContactForm />
      <SocialLinks />
    </div>
  );
}
