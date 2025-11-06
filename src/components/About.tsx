import { useEffect, useRef } from 'react';
import { Code2, Palette, Sparkles } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: Code2,
      title: 'Development',
      description: 'Building robust, scalable applications with modern technologies and best practices.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating intuitive, beautiful interfaces that users love to interact with.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Always exploring new techniques and pushing the boundaries of what\'s possible.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-on-scroll">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Passion Meets Precision
            </h2>
            <div className="w-20 h-1 bg-accent mb-6" />
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a creative professional who believes that great design isn't just about how things look—
                it's about how they work and how they make people feel.
              </p>
              <p>
                With a background spanning both design and development, I bring a unique perspective 
                that bridges the gap between beautiful interfaces and robust functionality. Every project 
                is an opportunity to create something meaningful and memorable.
              </p>
              <p className="text-foreground font-medium">
                My mission is simple: craft digital experiences that not only meet objectives but 
                exceed expectations and delight users at every interaction.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll relative">
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`p-6 bg-card rounded-2xl hover-lift shadow-[var(--shadow-soft)] border border-border ${
                    index === 2 ? 'col-span-2' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
