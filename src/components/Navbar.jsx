import { useState } from "react";
import { Menu, X } from "lucide-react";
import profileImage from "../assets/rajat_saini.png";
import resumeFile from "../assets/RAJAT_Resume04.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navClass =
    "text-gray-300 hover:text-[#2DD4BF] transition";

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]">
          <img
            src={profileImage}
            alt="Rajat Kumar Saini"
            className="w-11 h-11 rounded-full object-cover border border-[#2DD4BF]"
          />
          <div className="text-left">
            <h1 className="text-white font-semibold text-sm md:text-base">
              Rajat Kumar Saini
            </h1>
            <p className="text-xs text-gray-400 tracking-wider">
              NODE.JS BACKEND
            </p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#work" className={navClass}>
            Work
          </a>
          <a href="#experience" className={navClass}>
            Experience
          </a>
          <a href="#contact" className={navClass}>
            Contact
          </a>
          <a
            href={resumeFile}
            download
            type="button"
            className="bg-[#2DD4BF] hover:bg-[#14B8A6] text-black px-6 py-2 rounded-full font-semibold text-sm transition"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden text-[#2DD4BF]">
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0F172A] border-t border-gray-800 px-6 py-4 space-y-4">
          <a
            href="#work"
            className={`block ${navClass}`}
            onClick={() => setOpen(false)}
          >
            Work
          </a>
          <a
            href="#experience"
            className={`block ${navClass}`}
            onClick={() => setOpen(false)}
          >
            Experience
          </a>
          <a
            href="#contact"
            className={`block ${navClass}`}
            onClick={() => setOpen(false)}
          >
            Contact
          </a>

          <a
            href={resumeFile}
            download
            type="button"
            className="block text-center w-full bg-[#2DD4BF] text-black py-2 rounded-full font-semibold"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
