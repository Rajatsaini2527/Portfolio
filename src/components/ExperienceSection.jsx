const roles = [
  {
    title: "Backend Developer (Node.js)",
    company: "Aucourant Technologies Pvt. Ltd., Dehradun",
    period: "Feb 2025 - Present",
    summary:
      "Architecting production backend services with Node.js and Express.js, integrating Python/OpenCV AI microservices for real-time video analysis, building WebSocket event pipelines, implementing JWT/RBAC access control, and optimizing MySQL and MongoDB performance.",
  },
  {
    title: "Node.js Backend Developer",
    company: "MYC India Education Pvt. Ltd., Mohali",
    period: "Jan 2024 - Feb 2025",
    summary:
      "Built and maintained REST APIs with Node.js, Express.js, Sequelize ORM, and MySQL, designed normalized schemas, improved query performance with indexing, and contributed to modular service design, API versioning, and error-handling middleware.",
  },
  {
    title: "Software Developer Intern",
    company: "Jsimple Technosoft Pvt. Ltd., Noida",
    period: "Jun 2022 - Dec 2022",
    summary:
      "Contributed to ASP.NET MVC applications, improved UI workflows, authored stored procedures and database views, and participated in debugging, testing, peer reviews, and sprint-based feature delivery.",
  },
];

const techStack = {
  Languages: ["JavaScript (ES2022+)", "Python", "SQL", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "JWT Auth", "RBAC"],
  Frontend: ["React.js", "Angular", "Bootstrap", "Material UI"],
  Databases: ["MongoDB", "MySQL", "MS SQL Server", "Sequelize ORM", "Query Optimization"],
  "Messaging & Async": ["RabbitMQ", "Async Processing", "Event-driven Architecture"],
  "Cloud & DevOps": ["AWS S3", "Docker", "GitHub Actions", "CI/CD", "Linux/WSL"],
  "AI Integration": ["Python OpenCV", "Video Stream Processing", "AI Microservices", "Activity Detection"],
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-24 bg-[#0F172A] text-white py-20 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-[#2DD4BF] text-xs tracking-widest mb-2">
            EXPERIENCE & STACK
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Experience <span className="text-gray-300">that scales.</span>
          </h2>
        </div>

        {/* Experience */}
        <div className="space-y-8 mb-20">
          {roles.map((role, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-2xl p-6 md:p-8 bg-gradient-to-r from-[#0F172A] to-[#111827] hover:border-[#2DD4BF]/50 transition"
            >
              <div className="flex flex-col md:flex-row justify-between gap-2 mb-3">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {role.title}
                </h3>
                <span className="text-sm text-[#2DD4BF]">
                  {role.period}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-3">
                {role.company}
              </p>

              <p className="text-gray-300 text-sm md:text-base max-w-3xl">
                {role.summary}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack (Like Image UI) */}
        <div>
          <p className="text-[#2DD4BF] text-xs tracking-widest mb-2">
            TECH STACK
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            Tools I ship <span className="text-gray-300">production with.</span>
          </h2>

          <div className="space-y-8">
            {Object.entries(techStack).map(([category, items], index) => (
              <div key={index}>
                <p className="text-gray-400 text-xs mb-3 uppercase tracking-wider">
                  {category}
                </p>

                <div className="flex flex-wrap gap-3">
                  {items.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-4 py-1.5 rounded-md border border-gray-700 text-gray-300 hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="border-b border-gray-800 mt-6"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
