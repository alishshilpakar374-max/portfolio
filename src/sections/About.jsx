import { Code2, Lightbulb, Rocket, Palette } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and interactive websites using HTML, CSS, JavaScript, React, and modern frontend tools.",
  },
  {
    icon: Palette,
    title: "UI & Design",
    description:
      "Creating clean, modern interfaces with a focus on responsive layouts, usability, and visual details.",
  },
  {
    icon: Rocket,
    title: "Always Learning",
    description:
      "Continuously improving my skills by building projects and exploring new technologies.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Turning ideas and problems into practical, functional, and user-friendly web experiences.",
  },
];

function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20">
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-sm font-medium uppercase tracking-wider text-secondary-foreground">
                About Me
              </span>
            </div>

            <h2 className="animate-fade-in text-4xl font-bold leading-tight text-secondary-foreground animation-delay-100 md:text-5xl">
              Turning ideas into
              <span className="font-serif italic font-normal text-white">
                digital experiences.
              </span>
            </h2>

            <div className="animate-fade-in space-y-4 text-muted-foreground animation-delay-200">
              <p>
                I'm a frontend developer who enjoys turning ideas into clean,
                responsive, and interactive web experiences. I'm passionate
                about understanding how things work and constantly improving the
                way I build for the web.
              </p>

              <p>
                I work mainly with HTML, CSS, JavaScript, React, and Tailwind
                CSS. I enjoy building projects that challenge me to learn
                something new while keeping the code clean and the interface
                easy to use.
              </p>

              <p>
                I'm currently focused on growing as a developer, building real
                projects, and exploring modern tools and technologies to improve
                my frontend skills.
              </p>
            </div>

            <div className="glass glow-border animate-fade-in rounded-2xl p-6 animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I believe the best way to learn development is to build,
                experiment, make mistakes, and keep improving."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                className="glass animate-fade-in rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors hover:bg-primary/20">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
