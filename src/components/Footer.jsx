export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-16  shadow-[0_-4px_15px_rgba(0,0,0,0.4)]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-6 md:space-y-0">
        
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold font-Poppins">
            Mnqobi <span className="text-primary">Sibiya</span>
          </h2>
          <p className="text-gray-400 text-sm">
            FullStack Developer | Creating digital magic with code
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-gray-400 text-sm">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        {/* Social Media */}
        <div className="flex space-x-5 text-xl">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:mnqobi@example.com" className="hover:text-primary transition-colors">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mnqobi Sibiya. All rights reserved.
      </div>
    </footer>
  );
}
