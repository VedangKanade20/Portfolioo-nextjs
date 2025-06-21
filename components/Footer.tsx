const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-purple-700 text-center text-sm text-gray-400 mt-12">
      <p>
        © {new Date().getFullYear()} Vedang Kanade. All rights reserved.
      </p>
      <p className="mt-1">
        Built with ❤️ using <span className="text-white font-medium">Next.js</span> and <span className="text-white font-medium">Tailwind CSS</span>
      </p>
    </footer>
  );
};

export default Footer;
