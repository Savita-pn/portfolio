import { motion } from "framer-motion";
import { useMemo } from "react";
import DATA from "./data";
import Section from "./components/Section";
import Card from "./components/Card";

// Hero Section
function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-pink-500 to-pink-700 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold">{DATA.name}</h1>
          <p className="mt-3 text-lg">
            {DATA.role} — {DATA.location}
          </p>
          <p className="mt-6 max-w-md leading-relaxed">{DATA.objective}</p>
          <div className="mt-6 flex gap-4">
            <a
              className="px-4 py-2 bg-white text-pink-600 rounded-lg font-medium hover:bg-slate-200 transition"
              href={`mailto:${DATA.email}`}
            >
              Email
            </a>
            <a
              className="px-4 py-2 bg-white text-pink-600 rounded-lg font-medium hover:bg-slate-200 transition"
              href={DATA.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="px-4 py-2 bg-white text-pink-600 rounded-lg font-medium hover:bg-slate-200 transition"
              href={DATA.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-64 h-64 rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}

// Navbar
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-bold text-lg text-pink-600">
          {DATA.name.split(" ")[0]}
        </a>
        <div className="flex gap-6 text-sm font-medium text-slate-700">
          {[
            "About",
            "Education",
            "Skills",
            "Projects",
            "Certifications",
            "Trainings",
            "Publication",
            "Activities",
            "Leadership",
            "Resume",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-pink-600 transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Resume Section
function Resume() {
  return (
    <Section id="resume" title="Resume">
      <div className="flex justify-center">
        <a
          href={DATA.links.resume}
          download="Savita_PN_Resume.pdf"
          className="px-6 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition"
        >
          Download Resume
        </a>
      </div>
    </Section>
  );
}

// Contact Section
function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Card>
        <p className="text-center">
          📧{" "}
          <a
            href={`mailto:${DATA.email}`}
            className="text-pink-600 hover:underline"
          >
            {DATA.email}
          </a>
        </p>
      </Card>
    </Section>
  );
}

// Main App
export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Hero />

      {/* About */}
      <Section id="about" title="About">
        <Card>
          <p>{DATA.about}</p>
        </Card>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        {DATA.education.map((edu, i) => (
          <Card key={i}>
            <h3 className="font-semibold">{edu.degree}</h3>
            <p className="text-sm text-slate-600">{edu.institution}</p>
            <p className="text-sm text-slate-500">{edu.year}</p>
          </Card>
        ))}
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <Card>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {DATA.skills.map((skill, i) => (
              <li
                key={i}
                className="px-3 py-1 bg-pink-100 text-pink-700 rounded-lg text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        {DATA.projects.map((project, i) => (
          <Card key={i}>
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sm text-slate-600">{project.description}</p>
          </Card>
        ))}
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications">
        {DATA.certifications.map((cert, i) => (
          <Card key={i}>
            <h3 className="font-semibold">{cert.title}</h3>
            <p className="text-sm text-slate-600">{cert.issuer}</p>
            <p className="text-sm text-slate-500">{cert.year}</p>
          </Card>
        ))}
      </Section>

      {/* Trainings */}
      <Section id="trainings" title="Trainings">
        {DATA.trainings.map((train, i) => (
          <Card key={i}>
            <h3 className="font-semibold">{train.title}</h3>
            <p className="text-sm text-slate-600">{train.organization}</p>
            <p className="text-sm text-slate-500">{train.year}</p>
          </Card>
        ))}
      </Section>

      {/* Publication */}
      <Section id="publication" title="Publication">
        {DATA.publications.map((pub, i) => (
          <Card key={i}>
            <h3 className="font-semibold">{pub.title}</h3>
            <p className="text-sm text-slate-600">{pub.journal}</p>
            <p className="text-sm text-slate-500">{pub.year}</p>
          </Card>
        ))}
      </Section>

      {/* Activities */}
      <Section id="activities" title="Activities">
        {DATA.activities.map((activity, i) => (
          <Card key={i}>
            <p>{activity}</p>
          </Card>
        ))}
      </Section>

      {/* Leadership */}
      <Section id="leadership" title="Leadership">
        {DATA.leadership.map((lead, i) => (
          <Card key={i}>
            <p>{lead}</p>
          </Card>
        ))}
      </Section>

      {/* Resume */}
      <Resume />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-slate-500 bg-pink-100">
        © {year} {DATA.name}.
      </footer>
    </div>
  );
}
