import React from "react";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, fully responsive developer portfolio built with React and TailwindCSS.",
      image: "src/assets/images/project1.png",
      tags: ["React", "TailwindCSS"],
      link: "#"
    },
    {
      title: "Task Manager App",
      description: "A web app for managing daily tasks with authentication and a clean UI.",
      image: "src/assets/images/project2.png",
      tags: ["JavaScript", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "E-Commerce Store",
      description: "A fully functional e-commerce site with cart, checkout, and payment integration.",
      image: "src/assets/images/project3.png",
      tags: ["React", "Stripe API", "Firebase"],
      link: "#"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-950 text-white py-20 px-6">
      <div className="container mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-primary text-lg uppercase tracking-widest">My Work</p>
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="text-gray-400 mt-2">Some of the projects I've built recently</p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition duration-300 shadow-lg">
              
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary hover:text-white transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Projects;