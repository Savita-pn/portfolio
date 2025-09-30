import { useMemo } from "react";
import { motion } from "framer-motion";

// --- Profile Data ---
const DATA = {
  name: "Savita PPP N",
  role: "Aspiring Software Engineer",
  location: "Rattihalli, Haveri",
  phone: "+91 9591507180",
  email: "nekarsavita@gmail.com",
  
  links: {
    linkedin: "https://www.linkedin.com/in/savita-p-n",
    github: "https://github.com/Savita-pn",
    resume: "/resume.pdf", // Add resume file path here
  },
  objective:
    "Passionate about technology and innovation, I’m an aspiring software engineer committed to lifelong learning and excited to experiment with new tools and technology to improve my abilities. I want to use technology to improve society and have a constructive influence.",
  education: [
    { title: "B.E. – Computer Science & Engineering", org: "Jain Institute of Technology, Davangere", period: "2022 – 2026", detail: "CGPA: 9.35" },
    { title: "PUC – PCMB", org: "Sir M V PU College, Davangere", period: "2021 – 2022", detail: "Percentage: 89%" },
    { title: "SSLC – KSEEB", org: "Akshara Residential School, Shikaripur", period: "2020", detail: "Percentage: 98%" },
  ],
  skills: {
    technical: ["C", "Python", "Java", "JavaScript", "PHP", "HTML5", "CSS3", "Bootstrap", "React.js", "MySQL", "MongoDB", "Data Structures", "OOP", "DBMS", "Machine Learning (Basics)"],
    soft: ["Communication", "Teamwork", "Time Management", "Problem Solving"],
    tools: ["MS Word", "Excel", "PowerPoint","Git & GitHub","Eclipse","Maven"],
  },
  projects: [
    { title: "Forest Fire Alert Using IoT", year: "2024", summary: "Integrates sensors, communication tech, and analytics for real-time fire alerts to minimize damage." },
    { title: "Emotion Responsive Music Player using EEG Signals", year: "2024", summary: "Deep Learning (CNN, RNN), kurtosis analysis and ML on NeuroSky EEG signals to play mood-matched music." },
    { title: "Event Management System", year: "2023", summary: "DBMS-backed application with SQL, normalization, data integrity, and basic frontend/backend features." },
  ],
  certifications: [
    "AI Primer – Infosys Springboard",
    "Rural IT Quiz – National Level Participant (TCS & Govt. of Karnataka)",
    "Diploma in Office Management – Veerabhadreshwar Institute",
    "Tally ERP-9 Advance – Veerabhadreshwar Institute",
    "Finalist – Inceptrix Hackathon 2025, Jain University",
    "Second Place – Stacksphere State-Level Mini Project Exhibition (JIT, Davangere)",
    "Infosys Bangalore DC – Pragati Path to Future Cohort 3 (Communication, Assertiveness, Presentation)",
    "Database Management System – Infosys Springboard",
  ],
  nptel: [
    "Elite – Internet of Things (IIT Kharagpur)",
    "Elite – Joy of Computing Using Python (IIT Madras)",
    "Certificate – Programming in Java (IIT Kharagpur)",
  ],
  trainings: [
    "Programming with Python – Scholiverse Educare Pvt Ltd (Skill India, NSDC)",
    "Web Development – Scholiverse Educare Pvt Ltd (Skill India, NSDC)",
  ],
  publication: {
    title: "Emotion Responsive Music Player Using EEG Signals Through NeuroSky Headset",
    venue: "International Journal of Progressive Research in Engineering Management and Science (IJPREMS)",
    details: "Vol. 5, Issue 3, March 2025. Paper ID: IJPREMS50300036032",
  },
  activities: [
    "Resource Person – Innovators Knowledge Grid (JIT, June 2025)",
    "Certificate of Merit – Speak for India (District-level, Dec 2023)",
  ],
  leadership: ["Coordinator – EMERGE-2025 State-Level Technical Symposium (JIT, April 2025)"],
};

// --- UI helpers ---
const Section = ({ id, title, children, gradient }) => (
  <section
    id={id}
    className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${gradient || ""}`}
  >
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold mb-8 text-center text-pink-600"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const Card = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`rounded-2xl shadow-lg bg-white p-6 hover:shadow-2xl transition ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-bold text-lg text-pink-600">{DATA.name.split(" ")[0]}</a>
          <nav className="hidden md:flex gap-6 text-sm">
            {["About", "Education", "Skills", "Projects", "Certifications", "Publication", "Trainings", "Activities", "Leadership", "Resume", "Contact"].map(
              (label) => (
                <a key={label} href={`#${label.toLowerCase()}`} className="hover:text-pink-600">{label}</a>
              )
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-pink-500 to-pink-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-bold">{DATA.name}</h1>
            <p className="mt-3 text-lg">{DATA.role} — {DATA.location}</p>
            <p className="mt-6 max-w-md leading-relaxed">{DATA.objective}</p>
            <div className="mt-6 flex gap-4">
              <a className="px-4 py-2 bg-white text-pink-600 rounded-lg font-medium hover:bg-slate-200 transition" href={`mailto:${DATA.email}`}>Email</a>
              <a className="px-4 py-2 bg-white text-pink-600 rounded-lg font-medium hover:bg-slate-200 transition" href={DATA.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="px-4 py-2 bg-white text-pink-600 rounded-lg font-medium hover:bg-slate-200 transition" href={DATA.links.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="flex justify-center md:justify-end">
  <img
    src="/profile.jpg"
    alt="profile/"
    className="w-64 h-64 rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
  />
</motion.div>

        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me" gradient="bg-gradient-to-r from-pink-50 to-pink-100">
        <Card>
          <p className="leading-relaxed text-slate-700 text-center">I enjoy building practical solutions with IoT, AI/ML and full-stack web technologies. I value teamwork, peer-to-peer learning, and clear communication.</p>
        </Card>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" gradient="bg-gradient-to-r from-pink-50 to-pink-100">
        <div className="grid md:grid-cols-3 gap-6">
          {DATA.education.map((edu) => (
            <Card key={edu.title}>
              <h3 className="font-semibold">{edu.title}</h3>
              <p>{edu.org}</p>
              <p className="text-sm text-slate-600">{edu.detail}</p>
              <p className="text-xs text-slate-500">{edu.period}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" gradient="bg-gradient-to-r from-pink-50 to-pink-100">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-semibold mb-2">Technical</h3>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.technical.map((s) => (<span key={s} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm hover:bg-pink-200 transition">{s}</span>))}
            </div>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.soft.map((s) => (<span key={s} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm hover:bg-pink-200 transition">{s}</span>))}
            </div>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.tools.map((s) => (<span key={s} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm hover:bg-pink-200 transition">{s}</span>))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" gradient="bg-gradient-to-r from-pink-50 to-pink-100">
        <div className="grid md:grid-cols-2 gap-6">
          {DATA.projects.map((p) => (
            <Card key={p.title}>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-500">{p.year}</p>
              <p className="mt-2 text-slate-700">{p.summary}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications & Achievements" gradient="bg-gradient-to-r from-pink-50 to-pink-100">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold mb-2">General</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              {DATA.certifications.map((c) => (<li key={c}>{c}</li>))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">NPTEL</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              {DATA.nptel.map((c) => (<li key={c}>{c}</li>))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Trainings */}
      <Section id="trainings" title="Internshala Trainings" gradient="bg-gradient-to-r from-pink-50 to-pink-100">
        <Card>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {DATA.trainings.map((t) => (<li key={t}>{t}</li>))}
          </ul>
        </Card>
      </Section>

      {/* Publication */}
      <Section id="publication" title="Publication" gradient="bg-gradient-to-r from-pink-50 to-pink-100">
        <Card>
          <h3 className="font-semibold">{DATA.publication.title}</h3>
          <p className="text-slate-700">{DATA.publication.venue}</p>
          <p className="text-slate-600 text-sm">{DATA.publication.details}</p>
        </Card>
      </Section>

      {/* Activities */}
      <Section id="activities" title="Extra-Curricular Activities" gradient="bg-gradient-to-r from-pink-50 to-pink-100">
        <Card>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {DATA.activities.map((a) => (<li key={a}>{a}</li>))}
          </ul>
        </Card>
      </Section>

      {/* Leadership */}
      <Section id="leadership" title="Leadership" gradient="bg-gradient-to-r from-pink-50 to-pink-100">
        <Card>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {DATA.leadership.map((l) => (<li key={l}>{l}</li>))}
          </ul>
        </Card>
      </Section>

      {/* Resume Download */}
      <Section id="resume" title="Resume" gradient="bg-gradient-to-r from-pink-50 to-pink-100">
        <Card className="text-center">
          <p className="mb-4">You can download my resume below:</p>
          <a
  href={DATA.links.resume}
  download="Savita_PN_Resume.pdf"
  className="px-6 py-2 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition"
>
  Download Resume
</a>

        </Card>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" gradient="bg-gradient-to-r from-pink-50 to-pink-100">
        <Card className="text-center">
          <p className="mb-2">Phone: <a href={`tel:${DATA.phone}`} className="text-pink-600">{DATA.phone}</a></p>
          <p className="mb-2">Email: <a href={`mailto:${DATA.email}`} className="text-pink-600">{DATA.email}</a></p>
          <p>
            <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="text-pink-600 underline mr-4">LinkedIn</a>
            <a href={DATA.links.github} target="_blank" rel="noreferrer" className="text-pink-600 underline">GitHub</a>
          </p>
        </Card>
      </Section>

      <footer className="py-10 text-center text-sm text-slate-500 bg-pink-100">© {DATA.name}.</footer>
    </div>
  );
}
