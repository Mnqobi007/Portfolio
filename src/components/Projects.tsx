import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Modern Web Platform',
      description: 'A sophisticated web application featuring clean UI and seamless user experience.',
      image: project1,
      tags: ['UI/UX', 'Development', 'Branding'],
    },
    {
      title: 'Brand Identity System',
      description: 'Complete brand guidelines and identity design for a contemporary startup.',
      image: project2,
      tags: ['Branding', 'Design', 'Strategy'],
    },
    {
      title: 'Mobile Experience',
      description: 'Intuitive mobile app design with focus on usability and visual appeal.',
      image: project3,
      tags: ['Mobile', 'UI/UX', 'Product'],
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll mb-16 text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            A curated selection of projects showcasing my approach to solving complex problems 
            with elegant, user-centered solutions.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`animate-on-scroll grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-display text-3xl md:text-4xl font-bold">
                  {project.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-4">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium group"
                  >
                    View Case Study
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
