import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-green-400" /> },
    { name: "Bootsrap", icon: <FaBootstrap className="text-red-500" /> },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center mb-12 relative inline-block">
          <span className="bg-primary text-black px-4 py-2 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            Skills
          </span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-all duration-300"
            >
              <div className="text-6xl mb-4">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
