import resumeFile from "../assets/RAJAT_Resume04.pdf";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-[#0F172A] text-white py-24 border-t border-gray-800 overflow-hidden"
    >

      {/* Gradient Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#2DD4BF]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <p className="text-[#2DD4BF] text-xs tracking-widest">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Let's build <br />
            something <span className="text-[#2DD4BF]">reliable.</span>
          </h2>

          <p className="text-gray-400 max-w-md">
            Whether you need scalable APIs, real-time systems, cloud media
            delivery, or AI-backed backend workflows, I can help turn product
            requirements into production-ready software.
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">

          {/* Resume Button */}
          <a
            href={resumeFile}
            download
            className="w-full inline-flex items-center justify-center gap-2 bg-[#2DD4BF] hover:bg-[#14B8A6] text-black px-6 py-4 rounded-full font-semibold transition shadow-[0_0_20px_#2DD4BF33]"
          >
            Download Resume
          </a>

          {/* Email */}
          <a
            href="mailto:rajatsaini798317@gmail.com"
            className="border border-gray-700 rounded-full px-6 py-4 flex items-center justify-center gap-2 text-gray-300 hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition"
          >
            {/* Email SVG */}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            rajatsaini798317@gmail.com
          </a>

          {/* Social */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rajat-kumar-saini-28024a238/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-700 rounded-xl py-3 hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Rajatsainiji"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-700 rounded-xl py-3 hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition"
            >
              {/* GitHub SVG */}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 0 0 6.8 9.5c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.3.9 1.3.9.8 1.3 2.2.9 2.7.7.1-.6.3-.9.5-1.1-2.2-.2-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.8-4.6 5 .3.2.6.7.6 1.5v2.2c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10z" />
              </svg>
              GitHub
            </a>

            {/* Portfolio */}
            <a
              href="#home"
              className="flex items-center justify-center gap-2 border border-gray-700 rounded-xl py-3 hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition"
            >
              {/* Globe SVG */}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15 15 0 0 1 0 20"></path>
              </svg>
              Portfolio
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
