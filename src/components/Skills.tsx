import { useEffect, useRef } from 'react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Design',
      skills: ['UI/UX Design', 'Visual Design', 'Prototyping', 'Design Systems', 'Figma', 'Adobe Creative Suite'],
    },
    {
      title: 'Development',
      skills: ['React', 'TypeScript', 'CSS/Tailwind', 'Node.js', 'REST APIs', 'Git'],
    },
    {
      title: 'Tools & Methods',
      skills: ['Agile', 'Design Thinking', 'User Research', 'A/B Testing', 'Performance Optimization'],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-16 text-center">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="animate-on-scroll group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 bg-card rounded-2xl hover-lift shadow-[var(--shadow-soft)] border border-border h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-muted-foreground hover:text-accent hover:translate-x-1 transition-all cursor-default"
                    >
                      <span className="w-1.5 h-1.5 bg-accent/60 rounded-full mr-3" />
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Always learning, always growing. Currently exploring AI integration and advanced animations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
