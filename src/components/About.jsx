import React from "react";

export const About = () => {
  const timelineData = [
    {
      year: "2022",
      title: "Started My Journey",
      description:
        "Began my BSc in Computer Science & Electronics at North-West University, diving deep into programming fundamentals.",
    },
    {
      year: "2023",
      title: "First Full Stack Project",
      description:
        "Built my first complete full-stack application using React, Node.js, and MongoDB — learning about scalability and deployment.",
    },
    {
      year: "2024",
      title: "Internship & Skill Growth",
      description:
        "Worked on real-world applications, mastered REST APIs, advanced React patterns, and optimized server-side performance.",
    },
    {
      year: "2025",
      title: "Building Modern Experiences",
      description:
        "Focused on crafting modern, responsive UIs, improving user experience, and exploring animations & accessibility.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-primary text-lg uppercase tracking-widest">
            Who I Am
          </h2>
          <h1 className="text-4xl font-bold leading-snug">
            My Journey in <span className="text-primary">Code</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            I’m <span className="font-semibold text-white">Mnqobi Sibiya</span>,
            a passionate <span className="font-semibold text-primary">Full Stack Developer</span> who thrives on
            turning ideas into functional, scalable, and engaging digital experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`mb-12 flex justify-between items-center w-full ${
                  isLeft ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="w-5/12"></div>

                <div className="z-10 flex flex-col items-center">
                  {/* Dot */}
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-gray-900 relative animate-fadeInScale"></div>

                  {/* Line connector */}
                  <div className="w-1 bg-primary flex-1"></div>
                </div>

                <div
                  className={`w-5/12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-transform duration-700 transform hover:scale-105 ${
                    isLeft
                      ? "text-right origin-right animate-slideInRight"
                      : "text-left origin-left animate-slideInLeft"
                  }`}
                  style={{ animationDelay: `${index * 0.3}s`, animationFillMode: "forwards" }}
                >
                  <span className="text-sm text-gray-400">{item.year}</span>
                  <h3 className="text-2xl font-semibold mt-1 text-primary">{item.title}</h3>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInScale {
            0% { opacity: 0; transform: scale(0.5); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fadeInScale {
            animation: fadeInScale 0.8s ease forwards;
          }

          @keyframes slideInLeft {
            0% { opacity: 0; transform: translateX(-50px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(50px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-slideInLeft {
            animation: slideInLeft 0.8s ease forwards;
          }
          .animate-slideInRight {
            animation: slideInRight 0.8s ease forwards;
          }
        `}
      </style>
    </section>
  );
};
