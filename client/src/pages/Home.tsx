import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Code,
  Shield,
  Zap,
  Phone,
  MessageCircle,
} from "lucide-react";

/**
 * Design Philosophy: Tech-Forward Professional
 * - Dark blue (#0F172A) background with neon green (#10B981) accents
 * - Poppins font for headings, Inter for body text
 * - Smooth transitions and hover effects
 * - Professional yet modern aesthetic reflecting cybersecurity expertise
 */

export default function Home() {
  const profileImage = "/ME.png";
  const heroImage =
    "https://private-us-east-1.manuscdn.com/sessionFile/zwu9F6Br7t7xvImCsSQ1lw/sandbox/m2gVXjCuy6Vh4JQbuHmR3b-img-1_1770757068000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvend1OUY2QnI3dDd4dkltQ3NTUTFsdy9zYW5kYm94L20yZ1ZYakN1eTZWaDRKUWJ1SG1SM2ItaW1nLTFfMTc3MDc1NzA2ODAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mlNdrWz3lEZU3FgV0CDTXjugtL4IC42U9YG48u2aYUlllP4ibNTZrrn~TTnMG-WeZZ9GbzWIAplxJ5kXmpu~0rzsgCwAFKhRUreONL1i-bX6D~5kAela1OAFseHs-PBcvx2MDlSl-VPyMkv2t3eyeT58xtiojtCuUZvsWFyuKVZMBgKI0LgSrQWcfnKX4IrUTjPTlbkZ-pK~fGQUro~-BKyDwzbJe7acDJhdG5HIJ9VjD0goJBoB-96ahm4~b75rkGPy8vwBkEkqLlUtusXoK9Sra3y~~6bDBpJYPE2V6jL3hlkdsy4P3zvlEGZrVqIc6~JrTkAcJnjDi~53TY5izw__";
  const techPattern =
    "https://private-us-east-1.manuscdn.com/sessionFile/zwu9F6Br7t7xvImCsSQ1lw/sandbox/m2gVXjCuy6Vh4JQbuHmR3b-img-3_1770757072000_na1fn_dGVjaC1wYXR0ZXJu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvend1OUY2QnI3dDd4dkltQ3NTUTFsdy9zYW5kYm94L20yZ1ZYakN1eTZWaDRKUWJ1SG1SM2ItaW1nLTNfMTc3MDc1NzA3MjAwMF9uYTFmbl9kR1ZqYUMxd1lYUjBaWEp1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=R0wdcfhLfLRdw4cGarQJiHNi60AwiwvEkHeDAiYkaPlvIwhq5ahd5dIy~asjAgx9BKEARyHAUiFBDEGzgEULBbJaIlVb0EdWwl1prrOMAsJob98ksXutfXuu7h6wqqSgRM-SFMOAGpqkoWYvmmNKm8vchF4rsK6yhmlaIRrC-tU3OvtqQLCSpaB9pTo88rDaGh2giW5sVAc9iKxhOIz5QqXgGqZmu9kE8INF0FqnpDs76~wPGpKnn-3oZTbS-209a~wRrvJC6MaCk8oZ5Y5bpPyDmP0j5D~h9mSG7~KGlePZpRHBIsMSvI3unmBkhLUaVmEu7ItdvyECjT-NWp-RCA__";

  const [selectedTraining, setSelectedTraining] = useState(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);


  const skills = [
    {
      category: "Soft Skills",
      items: [
        { name: "Analytical Thinking & Problem Solving", level: 90 },
        { name: "Data-Driven Decision Making", level: 90 },
        { name: "Technical Communication & Presentation", level: 85 },
        { name: "Adaptability & Continuous Learning", level: 80 },
        { name: "Critical Thinking", level: 80 },
      ],
    },
    {
      category: "Data Analysis & Visualization",
      items: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 80 },
      ],
    },
    {
      category: "Programming",
      items: [
        { name: "Visual Studio Code", level: 95 },
        { name: "Python", level: 90 },
        { name: "C++", level: 90 },
        { name: "C#", level: 80 },
        { name: "C", level: 75 },
        { name: "SQL", level: 85 },
        { name: "R", level: 80 },
      ],
    },
    {
      category: "Machine Learning & Statistical Analysis",
      items: [
        { name: "Supervised & Unsupervised Learning", level: 90 },
        { name: "Scikit-learn", level: 85 },
        { name: "Hypothesis Testing", level: 70 },
        { name: "Regression Analysis", level: 80 },
        { name: "Probability Distributions", level: 80 },
        { name: "Model Evaluation Metrics", level: 85 },
      ],
    },
  ];

  const certifications = [
    {
      name: "Introduction to C#",
       image: "/certificates/231d3929-be80-44c1-a099-2c5900ae242e.jpg",
    },
    {
      name: "Digitopia Competition Recognition",
       image: "/certificates/1758567908720.png",
    },
    {
      name: "Artificial Intelligence & Machine Learning from ITI",
       image: "/certificates/1764277276685.png",
    },
    {
      name: "Career Direction",
       image: "/certificates/Michael.png",
    },
    { name: "Getting Started with Deep Learning", 
      image: "/certificates/nvidia.png" },
   
  ];

  const trainings = [
    {
      title: "DEPI Round 4, Microsoft Machine Learning & AI Training",
      period: "11/2025 – 07/2026",
      description:
        "Machine Learning track under the Digital Egypt Pioneers Initiative (DEPI), covering supervised and unsupervised learning, data preprocessing, and model evaluation techniques.",
    },
    {
      title: "Artificial Intelligence & Machine Learning, ITI",
      period: "08/2025 – 09/2025",
      description:
        "Completed AI & Machine Learning training at ITI, focusing on ML algorithms, data analysis, and model development.",
    },
    {
      title: "Introduction to C#",
      description:
        "Completed an introductory training in C#, covering core programming concepts including OOP principles, data types, control structures, and basic application development.",
    },
    {
      title: "Getting Started with Deep Learning, NVIDIA",
      period: "08/2025",
      description:
        "Completed a foundational training in Deep Learning, covering neural networks, backpropagation, and building basic models using Python.",
    },
    {
      title: "Career Direction",
      period: "04/2025",
      description:
        "Completed a Career Direction program focused on career planning, CV writing, interview skills, personal branding, and professional development.",
    },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description: "Designed and developed a modern, responsive portfolio using React, Vite, and Tailwind CSS. Implemented reusable components, dynamic project sections, and smooth UI animations to enhance user experience. Integrated version control with GitHub and deployed using Vercel with automated CI/CD.",
      images: ["/projects/WhatsApp Image 2026-02-17 at 12.28.25 AM.jpeg"],
      link: "https://github.com/Michael-Samy0/Michael-Portfolio.git",
    
    },
    {
      title: "Merge Generative Model",
      description:
        "Designed and implemented a Merge Generative Model to combine outputs from multiple generative approaches, enhancing prediction quality and model robustness. Applied data preprocessing, model evaluation techniques, and performance optimization to improve overall accuracy.",
      images: ["/projects/generative.png"],
    },
    {
      title: "Medical RAG System",
      description: "Developed a Medical Retrieval-Augmented Generation (RAG) system to provide accurate, context-aware medical responses by integrating document retrieval with generative language models. Implemented data indexing, semantic search, and response generation while ensuring reliable information extraction from medical sources",
      images: ["/projects/medical.png"],
    },
    {
      title: "Image Processing",
      images: ["/projects/Screenshot 2026-02-16 231116.png"],
      description: "Developed image processing solutions applying techniques such as filtering, edge detection, image enhancement, and feature extraction. Utilized Python-based libraries to analyze and transform images for improved visual quality and data interpretation",
    },
    {
      title: "Sentiment Analysis",
      description: "Developed a Sentiment Analysis model to classify text data into sentiment categories using NLP techniques, including text preprocessing, tokenization, and feature extraction. Trained and evaluated machine learning models to improve classification accuracy and performance",
      images: ["/projects/sentiment.png"],
    },
    {
      title: "Neural Networks",
      description: "Designed and implemented Neural Network models to solve predictive tasks, applying forward and backpropagation techniques, optimization algorithms, and performance evaluation metrics. Conducted data preprocessing and hyperparameter tuning to enhance model accuracy and generalization.",
      images: ["/projects/Screenshot 2026-02-16 231417.png"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-accent">
            <a href="#home">MS</a></h1>
          <div className="flex gap-6 items-center">
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-accent transition-colors">
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-accent transition-colors"
            >
              Experience
            </a>
            <a href="#Certificates" className="hover:text-accent transition-colors">
              Certificates
            </a>
            <a href="#Projects" className="hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-20 pb-32">
        <div
          className="absolute inset-0 opacity-30 z-0"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-1" />

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <p className="text-accent font-semibold text-lg">
                  Welcome to my portfolio.
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                  Michael Samy 
                </h1>
                <p className="text-2xl text-muted-foreground">
                  AI Engineer
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Entry-level AI Engineer with hands-on training in
                machine learning, neural networks, and deep learning. Experienced in
                implementing and optimizing AI models for various applications.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="mailto:michelsamy58@gmail.com"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                >
                  <Mail size={20} />
                  Get in Touch
                </a>
                <a
                  href="https://drive.google.com/file/d/1zUCz1jP9DE47yPADMsr8W4dS4QhsYqlM/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                >
                  View CV
                </a>
                <a
                  href="/Michael's CV..pdf"
                  download
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center animate-fade-in-delayed">
              <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden border-2 border-accent shadow-2xl">
                <img
                  src={profileImage}
                  alt="Michael Samy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-accent">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-colors">
              <Shield className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Machine Learning Focus</h3>
              <p className="text-muted-foreground">
                Specialized in supervised and unsupervised learning, neural networks, and statistical modeling with hands-on experience in model development, evaluation, and optimization across real-world projects.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-colors">
              <Code className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Data Science & AI Skills</h3>
              <p className="text-muted-foreground">
                Proficient in Python, Scikit-learn, and data analysis libraries (Pandas, NumPy) with practical experience in NLP, image processing, and retrieval-augmented generation (RAG) systems.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-colors">
              <Zap className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Fast Learner</h3>
              <p className="text-muted-foreground">
                Continuous improvement mindset with strong problem-solving
                abilities and excellent communication skills for team
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-border bg-card/30">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-accent">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-card p-6 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-accent mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between gap-4"
                    >
                      {/*skill name */}
                      <span className="text-sm font-medium w-28">
                        {skill.name}
                      </span>
                      {/* progress bar + number */}
                      <div className="flex items-center gap-3 w-full">
                        <div className="w-full bg-border rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        {/* percentage number */}
                        <span className="text-sm font-medium w-10 text-right">
                          {skill.level}%
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Experience Section */}
      <section id="experience" className="py-20 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-accent">
            Training & Experience
          </h2>
          <div className="space-y-6">
            {trainings.map((training, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedTraining(training)}
                className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {training.title}
                  </h3>
                  <span className="text-accent font-semibold text-sm">
                    {training.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{training.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedTraining && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedTraining(null)}
        >
          <div
            className="bg-card p-6 rounded-xl max-w-lg w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-accent text-xl"
              onClick={() => setSelectedTraining(null)}
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4 text-accent">
              {selectedTraining.title}
            </h3>

            {selectedTraining.images && (
              <div className="grid grid-cols-2 md:gap-cols-3 gap-3">
                {selectedTraining.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => setSelectedImage(img)}
                    className="aspect-square object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Certifications Section */}
      <section id="Certificates" className="py-20 border-t border-border bg-card/30">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-accent">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) =>
              cert.link ? (
                <a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all group"
                >
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-accent transition-colors">
                    {cert.name}
                  </span>
                </a>
              ) : cert.image ? (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(cert.image)}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all cursor-pointer"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <span className="text-muted-foreground">{cert.name}</span>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="Projects" className="py-20 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-accent">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <span className="text-accent font-semibold text-sm">
                    {project.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card p-6 rounded-xl max-w-lg w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-accent text-xl"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4 text-accent">
              {selectedProject.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {selectedProject.description}
            </p>
            {selectedProject.images && (
              <div className="grid grid-cols-2 md:gap-cols-3 gap-3">
                {selectedProject.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => setSelectedImage(img)}
                    className="aspect-square object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                  />
                ))}
              </div>
            )}
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                className="inline-flex items-center gap-2 mt-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-accent">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:michelsamy58@gmail.com"
              className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg text-center group"
            >
              <Mail
                className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-muted-foreground break-all">
                michelsamy58@gmail.com
              </p>
            </a>
            <a
              href="https://linkedin.com/in/michaelsamy1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg text-center group"
            >
              <Linkedin
                className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground">Michael Samy</p>
            </a>
            <a
              href="https://github.com/Michael-Samy0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg text-center group"
            >
              <Github
                className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className="text-muted-foreground">Michael-Samy0</p>
            </a>
            <a
              href="tel:+201225637241"
              className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg text-center group"
            >
              <Phone
                className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-bold mb-2">Mobile</h3>
              <p className="text-muted-foreground break-all">
                +20 122 563 7241
              </p>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/201225637241"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg text-center group"
            >
              <MessageCircle
                className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground break-all">
                +20 122 563 7241
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card/50">
        <div className="container max-w-6xl mx-auto px-4 text-center text-muted-foreground">
          <p>© Michael Samy . All rights reserved.</p>
          <p className="text-sm mt-2">
            AI & Machine Learning Engineer | Software Developer
          </p>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
      `}</style>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full px-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-4 text-white text-3xl"
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt=""
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
