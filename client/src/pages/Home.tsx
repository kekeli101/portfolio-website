import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Twitter } from "lucide-react";
import { useState } from "react";

/**
 * Portfolio Website - Owusu Prince
 * Design: Organic Glassmorphism - Dark Theme
 * - Deep navy/slate background with frosted glass cards
 * - Warm terracotta and sage green accents
 * - Smooth animations and organic curves
 * - Typography: Playfair Display for headings, Poppins for body
 */

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  status: "in-progress" | "completed" | "active";
}

const projects: Project[] = [
  {
    id: "1",
    title: "Illegal Mining Monitor (FYP)",
    description: "Research-focused final year project using ESP32 sensor networks to detect and monitor illegal small-scale mining (galamsey) in Ghana. Targeting real environmental impact.",
    tags: ["ESP32", "IoT", "Research", "Ghana"],
    status: "in-progress",
  },
  {
    id: "2",
    title: "ESP32 Room Voice Assistant",
    description: "Building a local voice assistant using an ESP32. Exploring embedded audio processing, command recognition, and hardware-software integration without cloud dependency.",
    tags: ["ESP32", "Embedded C", "Audio", "IoT"],
    status: "active",
  },
  {
    id: "3",
    title: "100 Days of Code",
    description: "Daily Python challenge following Angela Yu's Udemy course. Every day's progress shared publicly on LinkedIn, GitHub, and Twitter. Consistency over perfection.",
    tags: ["Python", "100DaysOfCode", "Open Source"],
    status: "active",
  },
  {
    id: "4",
    title: "ML Kaggle Journey",
    description: "Working through Kaggle's Intro to ML course. Completed my first DecisionTreeRegressor exercise and preparing for my first Zindi submission.",
    tags: ["Python", "Scikit-learn", "Kaggle", "Zindi"],
    status: "active",
  },
  {
    id: "5",
    title: "Splunk Learning Lab",
    description: "Hands-on Splunk practice as I work toward the Splunk Core Certified User cert. Documenting SPL queries, dashboards, and search techniques from scratch.",
    tags: ["Splunk", "SPL", "SIEM", "Certification"],
    status: "active",
  },
];

const skills = [
  {
    category: "Languages",
    items: ["Python", "C / C++", "SQL", "Bash / Shell"],
  },
  {
    category: "Data & Analytics",
    items: ["Pandas & NumPy", "Tableau", "Power BI", "Splunk / SPL"],
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "Decision Trees", "Kaggle Workflows", "Zindi"],
  },
  {
    category: "Backend Dev",
    items: ["REST APIs", "Backend Architecture", "Portfolio Projects"],
  },
  {
    category: "Hardware & Embedded",
    items: ["ESP32", "IoT Sensor Networks", "Substation Systems", "Circuit Analysis"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git & GitHub", "Linux / CLI", "Zindi", "Brave Browser"],
  },
];

const hobbies = [
  { icon: "📷", name: "Photography", desc: "Capturing moments & perspectives" },
  { icon: "🌍", name: "Language Learning", desc: "Currently learning German" },
  { icon: "📡", name: "Electronics", desc: "Tinkering with ESP32 & circuits" },
  { icon: "✍️", name: "Writing", desc: "Documenting the learning journey" },
  { icon: "⛪", name: "Community", desc: "Church & charity events" },
  { icon: "📖", name: "Reading", desc: "Tech, research & beyond" },
];

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold gradient-text">Owusu Prince</div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#hobbies" className="text-foreground hover:text-primary transition-colors">
              Hobbies
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 bg-gradient-to-b from-slate-900 via-slate-800 to-background">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-transparent" />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-semibold mb-4 flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-primary"></span>
              Computer Engineer · Kumasi, Ghana 🇬🇭
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Where <span className="gradient-text">data meets</span> hardware.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-2xl">
              I'm Owusu Prince — a final-year Computer Engineering student from Ghana building at the intersection of embedded systems, data analytics, and backend development. I learn in public, ship often, and document everything.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-base">
                See my projects →
              </Button>
              <Button variant="outline" className="px-8 py-6 rounded-full text-base border-primary text-primary hover:bg-primary/5">
                About me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background border-y border-white/5">
        <div className="container">
          <div className="mb-12">
            <p className="text-primary text-sm font-semibold mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Engineer by training,<br />builder by nature.</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm Owusu Prince (also known as Dr. Kekeli), a final-year Computer Engineering student based in Kumasi, Ghana. My engineering journey started hands-on — I interned as an electrical engineer with real substation work under my belt before most students finish their first year of theory.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Today I work at an interesting crossroads: data analytics, embedded systems (ESP32 & IoT), and backend development. My final year project is research-focused — monitoring illegal mining activity in Ghana using sensor networks — because I believe engineering should solve real problems for real people.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm an obsessive, public learner. 100 Days of Code, Kaggle notebooks, LinkedIn semester reflections, GitHub commits — if I'm learning it, I'm sharing it.
              </p>
            </div>

            <div className="space-y-3">
              <div className="glass-card p-4">
                <p className="text-xs text-primary font-semibold mb-1">Degree</p>
                <p className="text-foreground">Computer Engineering (Final Year)</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-xs text-primary font-semibold mb-1">Based in</p>
                <p className="text-foreground">Kumasi, Ghana 🇬🇭</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-xs text-primary font-semibold mb-1">Background</p>
                <p className="text-foreground">Electrical Engineering Intern · Substation Work</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-xs text-primary font-semibold mb-1">Currently pursuing</p>
                <p className="text-foreground">Splunk Core Certified User</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-xs text-primary font-semibold mb-1">Long-term goal</p>
                <p className="text-foreground">Postgraduate Research in Engineering</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-xs text-primary font-semibold mb-1">Also learning</p>
                <p className="text-foreground">German 🇩🇪 · Machine Learning · SPL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-background to-slate-900/30">
        <div className="container">
          <div className="mb-16">
            <p className="text-primary text-sm font-semibold mb-4">Projects</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Things I've built & am building.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="glass-card overflow-hidden group cursor-pointer p-6"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground flex-1">{project.title}</h3>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-2 ${
                      project.status === "in-progress"
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary/20 text-secondary"
                    }`}
                  >
                    {project.status === "in-progress" ? "In Progress" : project.status === "active" ? "Active" : "Completed"}
                  </span>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed text-sm">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/5 text-foreground/70 px-3 py-1 rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-background border-y border-white/5">
        <div className="container">
          <div className="mb-16">
            <p className="text-primary text-sm font-semibold mb-4">Skills & Tools</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">What I work with.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="glass-card p-6">
                <h3 className="text-primary text-sm font-semibold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-foreground/80 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 md:py-32 bg-gradient-to-b from-background via-slate-800/20 to-background">
        <div className="container">
          <div className="mb-16">
            <p className="text-primary text-sm font-semibold mb-4">Hobbies</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Beyond the screen.</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {hobbies.map((hobby) => (
              <div key={hobby.name} className="glass-card p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">{hobby.icon}</div>
                <h3 className="text-foreground font-semibold text-sm mb-1">{hobby.name}</h3>
                <p className="text-foreground/70 text-xs">{hobby.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-background border-t border-white/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's connect.</h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              I'm always interested in collaborating on projects, discussing tech, or just connecting with fellow builders and learners.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://github.com/kekeli101"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/owusu-kekeli-prince-973871299"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/adentaspiderman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:owusuprince@example.com"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/10 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-foreground/70 text-sm">© 2026 · Owusu Prince · Built with purpose</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://github.com/kekeli101" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/owusu-kekeli-prince-973871299" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                LinkedIn
              </a>
              <a href="https://x.com/adentaspiderman" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
