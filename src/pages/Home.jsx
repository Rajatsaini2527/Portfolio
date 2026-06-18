import Work from "./Work";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import WhatIDo from "../components/WhatIDo";
import profileImage from "../assets/rajat_saini.png";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="scroll-mt-24 min-h-screen bg-[#0F172A] text-white flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 relative">

            {/* Text Glow Background */}
            <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-[#2DD4BF]/10 blur-3xl rounded-full"></div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight relative z-10">

              <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                Rajat Kumar
              </span>
              <br />

              <span className="bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6] bg-clip-text text-transparent">
                Saini
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg max-w-md">
              Node.js Backend Developer building scalable REST APIs, real-time
              WebSocket systems, AI-integrated microservices, and production
              platforms for modern products.
            </p>

            <p className="text-gray-500 text-sm">
              2+ years shipping backend systems with Node.js, Express.js,
              MongoDB, MySQL, AWS S3, RabbitMQ, Docker, and CI/CD.
              <br />
              <span>Built systems supporting 20,000+ active users.</span>
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pt-4 flex-wrap">
              <a
                href="#work"
                className="bg-[#2DD4BF] hover:bg-[#14B8A6] text-black px-6 py-3 rounded-full font-semibold transition"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="border border-gray-600 px-6 py-3 rounded-full hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">

              {/* Big Gradient Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2DD4BF]/30 via-[#14B8A6]/20 to-transparent blur-3xl"></div>

              {/* Extra Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-[#2DD4BF]/20 animate-pulse"></div>

              <img
                src={profileImage}
                alt="Rajat Kumar Saini"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#2DD4BF] shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <WhatIDo />
      <Work />
      <ExperienceSection />
      <ContactSection />
    </>
  );
};

export default Home;
