import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { useState } from "react";

/**
 * Portfolio Website - Home Page
 * Design: Organic Glassmorphism
 * - Warm cream background with frosted glass cards
 * - Terracotta and sage green accents
 * - Smooth animations and organic curves
 * - Typography: Playfair Display for headings, Poppins for body
 */

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  status: "in-progress" | "completed";
}

const projects: Project[] = [
  {
    id: "1",
    title: "Project One",
    description: "A modern web application built with React and TypeScript. Features real-time data synchronization and beautiful UI.",
    tags: ["React", "TypeScript", "TailwindCSS"],
    link: "#",
    status: "in-progress",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028885541/cof2pg97L2vDjzSxRmuQN4/project-card-bg-1-HdwbDB4tPZUmgXmk4CqLe9.webp",
  },
  {
    id: "2",
    title: "Project Two",
    description: "An innovative design system with comprehensive component library. Focused on accessibility and developer experience.",
    tags: ["Design System", "Components", "Documentation"],
    link: "#",
    status: "completed",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028885541/cof2pg97L2vDjzSxRmuQN4/project-card-bg-2-EWip2NHCsjRnw9qph8rx2q.webp",
  },
  {
    id: "3",
    title: "Project Three",
    description: "Full-stack application with backend API and database integration. Includes user authentication and real-time features.",
    tags: ["Node.js", "PostgreSQL", "WebSockets"],
    link: "#",
    status: "in-progress",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028885541/cof2pg97L2vDjzSxRmuQN4/project-card-bg-1-HdwbDB4tPZUmgXmk4CqLe9.webp",
  },
];

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/40 backdrop-blur-md border-b border-white/20">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold gradient-text">Portfolio</div>
          <div className="flex gap-6">
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028885541/cof2pg97L2vDjzSxRmuQN4/hero-background-QvVWi9W6S3jFyyFAkmLNjP.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/30 to-transparent" />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Crafting Digital
              <span className="gradient-text"> Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
              I'm a creative developer passionate about building beautiful, functional web applications. Currently working on innovative projects that blend design and technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-base">
                View My Work
              </Button>
              <Button variant="outline" className="px-8 py-6 rounded-full text-base border-primary text-primary hover:bg-primary/5">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-background to-white/30">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-foreground/60">Explore the work I'm currently focused on and recently completed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="glass-card overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        project.status === "in-progress"
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      {project.status === "in-progress" ? "In Progress" : "Completed"}
                    </span>
                  </div>

                  <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/50 text-foreground/70 px-3 py-1 rounded-full border border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h2>
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                I'm a full-stack developer with a passion for creating intuitive, beautiful digital experiences. With expertise in modern web technologies and a keen eye for design, I bridge the gap between functionality and aesthetics.
              </p>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Skills & Expertise</h3>
              <div className="space-y-4">
                {[
                  { category: "Frontend", skills: "React, TypeScript, TailwindCSS, Next.js" },
                  { category: "Backend", skills: "Node.js, Express, PostgreSQL, MongoDB" },
                  { category: "Design", skills: "UI/UX, Figma, Design Systems, Accessibility" },
                  { category: "Tools", skills: "Git, Docker, CI/CD, AWS" },
                ].map((skill) => (
                  <div key={skill.category}>
                    <h4 className="font-semibold text-foreground mb-2">{skill.category}</h4>
                    <p className="text-foreground/60">{skill.skills}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background via-white/20 to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Work Together</h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just say hello!
            </p>

            <div className="glass-card p-8 md:p-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:hello@example.com">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-base flex items-center justify-center gap-2">
                    <Mail size={20} />
                    Send Email
                  </Button>
                </a>
                <Button variant="outline" className="w-full sm:w-auto px-8 py-6 rounded-full text-base border-primary text-primary hover:bg-primary/5">
                  Schedule Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-white/20 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-foreground/60 text-sm">© 2024 My Portfolio. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
                Terms
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
