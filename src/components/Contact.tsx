import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
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

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 px-6 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="animate-on-scroll text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Let's Create Something
            <br />
            <span className="text-gradient">Amazing Together</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you have a project in mind, need some advice, or just want to say hello,
            I'd love to hear from you. Let's turn your vision into reality.
          </p>
        </div>

        <div className="animate-on-scroll mb-16">
          <div className="bg-card p-8 md:p-12 rounded-3xl shadow-2xl border border-border max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-background rounded-2xl hover-lift">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Email Me</h3>
                <p className="text-sm text-muted-foreground mb-4">For project inquiries and collaborations</p>
                <a href="mailto:hello@example.com" className="text-accent font-medium hover:underline">
                  hello@example.com
                </a>
              </div>
              
              <div className="p-6 bg-background rounded-2xl hover-lift">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Linkedin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Connect</h3>
                <p className="text-sm text-muted-foreground mb-4">Let's grow our professional network</p>
                <a href="#" className="text-accent font-medium hover:underline">
                  View Profile
                </a>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-10 shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.location.href = 'mailto:hello@example.com'}
              >
                Start a Conversation
                <Mail className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll">
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-14 h-14 rounded-2xl bg-card hover:bg-accent/10 flex items-center justify-center transition-all hover-lift shadow-[var(--shadow-soft)] border border-border group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground">
            Available for freelance opportunities • Based in Your City
          </p>
        </div>
      </div>

      <footer className="relative mt-24 pt-12 border-t border-border text-center">
        <p className="text-sm text-muted-foreground mb-2">
          © 2024 Portfolio. Crafted with passion and precision.
        </p>
        <p className="text-xs text-muted-foreground">
          Designed & Developed by You
        </p>
      </footer>
    </section>
  );
};

export default Contact;
