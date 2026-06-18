const projects = [
  {
    title: "Cratch - AI Child Activity Monitoring",
    highlight: "AI + Real-time",
    desc: "A microservice-based monitoring platform where Node.js manages APIs, WebSocket events, and MongoDB storage while Python/OpenCV processes live video activity.",
    tech: ["Node.js", "Python", "OpenCV", "MongoDB", "WebSockets"],
    points: [
      "Designed REST APIs and WebSocket event brokering for live dashboards",
      "Integrated Python/OpenCV services for frame-level activity detection",
      "Stored classified activity events asynchronously for audit trails",
      "Built configurable alert thresholds and real-time notification flows",
      "Supported live video streaming and activity tracking",
    ],
  },
  {
    title: "SELMS (LMS Platform)",
    highlight: "20,000+ Users",
    desc: "A production-grade Learning Management System built on the MERN stack with adaptive video delivery, payments, async processing, and automated deployments.",
    tech: ["MERN", "AWS S3", "RabbitMQ", "Razorpay", "CI/CD"],
    points: [
      "Engineered REST APIs with role-based access control",
      "Implemented AWS S3 and HLS streaming for course videos",
      "Used RabbitMQ for emails, reports, imports, and background jobs",
      "Built Excel bulk imports with validation and rollback support",
      "Integrated Razorpay webhooks for payment and subscription updates",
    ],
  },
  {
    title: "CRM Web Application",
    highlight: "Enterprise Tool",
    desc: "A role-based CRM for lead tracking, contact management, pipeline analytics, team notifications, and application status workflows.",
    tech: ["Angular", "Node.js", "MySQL", "Laravel"],
    points: [
      "Developed backend REST APIs and database workflows",
      "Designed lead, contact, and pipeline management modules",
      "Built role-based dashboards with granular permissions",
      "Logged application status changes for tracking and auditability",
      "Implemented WebSocket notifications for concurrent users",
    ],
  },
  {
    title: "Study Abroad Platform",
    highlight: "Search System",
    desc: "A student eligibility and course discovery platform for matching profiles with universities, programs, exam scores, and admission criteria.",
    tech: ["Node.js", "MySQL", "Angular"],
    points: [
      "Built an eligibility engine based on exam score thresholds",
      "Developed search across 1,000+ courses and universities",
      "Added filtering, pagination, and sorting for large result sets",
      "Optimized backend performance for faster course discovery",
    ],
  },
];

const Work = () => {
  return (
    <section id="work" className="scroll-mt-24 bg-[#0F172A] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-[#2DD4BF] text-xs tracking-widest mb-2">
            WORK THAT SHIPPED
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Real problems. <br />
            <span className="text-gray-300">Real outcomes.</span>
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl p-6 md:p-10 bg-gradient-to-r from-[#0F172A] to-[#111827] hover:border-[#2DD4BF] transition"
            >

              {/* Top */}
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {project.title}
                </h3>
                <span className="text-[#2DD4BF] font-bold text-xl">
                  {project.highlight}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 max-w-2xl">
                {project.desc}
              </p>

              {/* Points */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {project.points.map((point, i) => (
                  <p key={i} className="text-sm text-gray-300">
                    - {point}
                  </p>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 border border-[#2DD4BF]/40 rounded-full text-[#2DD4BF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;
