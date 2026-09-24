import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button, AnimatedBorderButton } from "../components";

const skills = [
  "React",
  "TypeScript",
  "Vercel",
  "Tailwind CSS",
  "Vite",
  "Git",
  "GitHub Actions",
];

const dots = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${(i * 37.7) % 100}%`,
  top: `${(i * 61.3) % 100}%`,
  duration: `${15 + ((i * 7) % 20)}s`,
  delay: `${((i * 1.7) % 5).toFixed(1)}s`,
}));

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/dashboard",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/alish-shilpakar-8343ba43a/",
  },
];

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary opacity-60"
            style={{
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className={isLoaded ? "animate-fade-in" : "opacity-0"}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Alish Shilpakar — a software engineer specializing in
                React, and TypeScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              {/* Glow */}
              <div className="absolute inset-0  rounded-3xl bg-linear-to-br from-primary/30 via-transparent   to-primary/10 blur-2xl  animate-pulse" />

              {/* Profile Card */}
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Alish Shilpakar"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Available Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            {/* Left Fade */}
            <div
              className="
            absolute left-0 top-0 bottom-0 w-32
            bg-linear-to-r from-background to-transparent
            z-10
          "
            />

            {/* Right Fade */}
            <div
              className="
            absolute right-0 top-0 bottom-0 w-32
            bg-linear-to-l from-background to-transparent
            z-10
          "
            />

            {/* Marquee */}
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={`${skill}-${index}`} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>

          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
