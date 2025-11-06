import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      
      {/* Floating decorative elements */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
          animationDelay: '1s',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
                <Sparkles size={16} className="animate-pulse" />
                Available for Projects
              </div>
            </div>
            
            <h1 className="animate-on-scroll font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transforming Ideas
              <br />
              Into{' '}
              <span className="text-gradient relative">
                Digital Reality
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 5 100 2 150 2C200 2 250 5 298 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-accent"
                  />
                </svg>
              </span>
            </h1>
            
            <p className="animate-on-scroll text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              I'm a creative professional specializing in crafting exceptional digital experiences 
              through thoughtful design and clean code. Let's build something remarkable together.
            </p>
            
            <div className="animate-on-scroll flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Explore My Work
                <ArrowDown className="ml-2 w-4 h-4 animate-bounce" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-accent/10 hover:border-accent transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Talk
              </Button>
            </div>

            <div className="animate-on-scroll flex gap-8 pt-4">
              <div>
                <div className="font-display text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl transform rotate-6" />
              <div className="relative bg-card p-8 rounded-3xl shadow-2xl border border-border">
                <div className="space-y-4">
                  <div className="h-4 bg-accent/20 rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                  <div className="h-32 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl mt-6" />
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="h-16 bg-muted rounded-lg" />
                    <div className="h-16 bg-muted rounded-lg" />
                    <div className="h-16 bg-muted rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
