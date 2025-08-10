import React from "react";

export const About = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-20 px-6 rounded-lg shadow-lg">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="src/assets/images/pic head.jpg"
            alt="Mnqobi Sibiya"
            className="w-72 h-80 object-cover rounded-2xl shadow-xl border-4 border-primary hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: About Content */}
        <div className="lg:w-2/3 space-y-6">
          <h2 className="text-primary text-lg uppercase tracking-widest">
            Who I Am
          </h2>
          <h1 className="text-4xl font-bold leading-snug">
            Crafting Modern Web Experiences with <span className="text-primary">Passion & Precision</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Hi, I’m <span className="font-semibold text-white">Mnqobi Sibiya</span>, a dedicated
            <span className="font-semibold text-primary"> Full Stack Developer</span> with a love for building
            interactive, user-focused applications. Currently pursuing my{" "}
            <span className="font-semibold">BSc in Computer Science and Electronics</span> at North-West University,
            I specialize in crafting intuitive designs and solving complex logic challenges.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            My toolkit includes <span className="text-white font-medium">JavaScript, Python, and Java</span>,
            and I thrive in turning abstract ideas into scalable, functional solutions.
            Beyond coding, I’m fueled by curiosity, constant learning, and a good cup of coffee.
          </p>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-primary">Front-End</h3>
              <p className="text-gray-300 text-sm">
                Responsive UIs, React, TailwindCSS, animations, and accessibility.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-primary">Back-End</h3>
              <p className="text-gray-300 text-sm">
                REST APIs, Node.js, databases, and efficient server-side logic.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-primary">Problem Solving</h3>
              <p className="text-gray-300 text-sm">
                Algorithm design, debugging, and optimizing application performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
