const sections = [
  {
    title: "Scalable Backend Engineering",
    desc: "Production-ready Node.js and Express.js services with clean API contracts, JWT authentication, RBAC, modular architecture, and reliable error handling.",
    tech: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "RBAC"],
  },
  {
    title: "Real-time & AI Integration",
    desc: "WebSocket-driven event systems that connect Node.js APIs with Python/OpenCV microservices for live video analysis and activity alerts.",
    tech: ["WebSockets", "Python", "OpenCV", "Microservices", "MongoDB"],
  },
  {
    title: "Cloud, Queues & Delivery",
    desc: "Media storage, HLS streaming, async job queues, background processing, and automated deployments built for production workloads.",
    tech: ["AWS S3", "HLS", "RabbitMQ", "Docker", "GitHub Actions"],
  },
  {
    title: "Product Engineering",
    desc: "Full-stack collaboration across React and Angular applications with optimized MySQL and MongoDB data models that keep products fast and maintainable.",
    tech: ["React.js", "Angular", "MySQL", "Sequelize", "MongoDB"],
  },
];

const WhatIDo = () => {
  return (
    <section className="bg-[#0F172A] text-white py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-[#2DD4BF] text-xs tracking-widest mb-2">
            WHAT I DO
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Stack. Ship. <br />
            <span className="text-gray-300">Scale.</span>
          </h2>
        </div>

        {/* Sections */}
        <div className="space-y-6">

          {sections.map((item, index) => (
            <div
              key={index}
              className="group relative border-b border-gray-800 transition duration-300"
            >

              {/* LEFT ACCENT LINE */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-[#2DD4BF] opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* CONTENT BOX */}
              <div className="p-5 md:p-6 rounded-xl transition duration-300 group-hover:bg-[#2DD4BF]/5 group-hover:translate-x-1">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  {/* LEFT CONTENT */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-[#2DD4BF] transition">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm max-w-2xl">
                      {item.desc}
                    </p>
                  </div>

                  {/* RIGHT TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 border border-[#2DD4BF]/40 rounded-md text-[#2DD4BF] transition group-hover:bg-[#2DD4BF]/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhatIDo;
