import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  FaGithub, FaLinkedin, FaLinux, FaJava, FaGitAlt, FaAws
} from 'react-icons/fa';
import {
  SiSpringboot, SiMysql, SiGooglecloud, SiPython, SiCanva, SiFigma, SiHtml5, SiCss3
} from 'react-icons/si';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Tilt from 'react-parallax-tilt';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const skillIcons = [
  { name: 'Java', icon: <FaJava />, level: 'Advanced' },
  { name: 'Spring Boot', icon: <SiSpringboot />, level: 'Intermediate' },
  { name: 'Git', icon: <FaGitAlt />, level: 'Advanced' },
  { name: 'Linux', icon: <FaLinux />, level: 'Intermediate' },
  { name: 'MySQL', icon: <SiMysql />, level: 'Intermediate' },
  { name: 'AWS', icon: <FaAws />, level: 'Beginner' },
  { name: 'GCP', icon: <SiGooglecloud />, level: 'Beginner' },
  { name: 'Python', icon: <SiPython />, level: 'Beginner' },
  { name: 'Canva', icon: <SiCanva />, level: 'Advanced' },
  { name: 'Figma', icon: <SiFigma />, level: 'Intermediate' },
  { name: 'Prompting', icon: '💡', level: 'Advanced' },
  { name: 'HTML & CSS', icon: <><SiHtml5 /> <SiCss3 /></>, level: 'Intermediate' },
];

const sections = ['home', 'about', 'skills', 'projects', 'interests', 'contact'];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [status, setStatus] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
    history.replaceState(null, '', location.pathname);

    const observers = sections.map((id) => {
      const section = document.getElementById(id);
      if (!section) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.5 }
      );
      observer.observe(section);
      return observer;
    });

    return () => observers.forEach((observer) => observer && observer.disconnect());
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  const res = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (res.ok) {
    setStatus('✅ Thank you! Your message has been sent.');
    form.reset();
  } else {
    setStatus('❌ Oops! Something went wrong. Please try again.');
  }
};


  return (
    <div className="dark min-h-screen transition-colors duration-300">
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white">
        <Head>
          <title>Omkar | Java Backend Developer</title>
          <meta name="description" content="Omkar - Java Backend Developer passionate about Cybersecurity, Cloud, and DevOps" />
        </Head>

        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full shadow-lg z-50 flex gap-6 text-sm text-white items-center">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`capitalize transition-all ${
                activeSection === sec
                  ? 'text-cyan-400 font-semibold underline underline-offset-4'
                  : 'hover:text-cyan-300'
              }`}
            >
              {sec}
            </a>
          ))}
        </nav>

        <main className="scroll-smooth">
          <section id="home" className="py-24 px-6 text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl mb-6 mx-auto">
              <img src="/profile.jpg" alt="Omkar's profile picture" className="object-cover w-full h-full" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-cyan-400">Omkar</span>
            </h1>
            <p className="text-2xl text-cyan-300 mb-2">Java Backend Developer</p>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              A backend developer passionate about <strong>Cybersecurity</strong>, <strong>Cloud</strong>, and <strong>DevOps</strong>. I build scalable systems with a focus on secure and efficient development.
            </p>
            <div className="flex gap-6 text-2xl mt-6 justify-center">
              <a href="https://github.com/itz-omkar-shinde-1432" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/omkar-shinde-3907a927a" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                <FaLinkedin />
              </a>
              <a href="https://hashnode.com/@securewithomkar" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-6 h-6 fill-current">
                  <path d="M50 0c4 0 7 1 10 3l37 37c5 5 5 15 0 20l-37 37c-5 5-15 5-20 0L3 60c-5-5-5-15 0-20L40 3c3-2 6-3 10-3zM50 35a15 15 0 1 0 0 30 15 15 0 0 0 0-30z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a href="#contact" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 px-8 rounded-full transition">
                Get in Touch
              </a>
              <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-8 py-3 rounded-full cursor-not-allowed opacity-80">
                Resume (Coming Soon)
              </button>
            </div>
          </section>

          <section id="about" className="py-24 px-6 text-center" data-aos="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">About Me</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a B.Tech student specializing in Cyber Security, driven by a deep passion for ethical hacking and problem-solving.
                I enjoy exploring new technologies and consistently diving deeper into the dynamic world of cybersecurity.
                <br className="hidden sm:block" />
                Whether it’s cracking complex challenges or understanding how systems can be made more secure, I'm always eager to learn and grow.
              </p>
            </div>
          </section>

<section id="skills" className="py-24 px-6 text-center" data-aos="fade-up">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-10 text-cyan-400">Skills</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {skillIcons.map((skill, index) => {
        const isHtmlCss = ['HTML', 'CSS'].includes(skill.name);
        return (
          <Tilt
            key={index}
            glareEnable
            glareMaxOpacity={0.2}
            scale={1.05}
            transitionSpeed={250}
          >
            <Tippy content={`Proficiency: ${skill.level}`} placement="top">
              <div
                className="bg-gradient-to-br from-cyan-600 to-blue-600 h-24 rounded-xl shadow-lg hover:shadow-cyan-400 flex flex-col items-center justify-center gap-2 text-lg"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                <span className={`${isHtmlCss ? 'text-xl mt-1' : 'text-3xl mt-1'}`}>
                  {skill.icon}
                </span>
                <span className={isHtmlCss ? '-mt-1' : ''}>{skill.name}</span>
              </div>
            </Tippy>
          </Tilt>
        );
      })}
    </div>
  </div>
</section>






          <section id="projects" className="py-24 px-6 text-center" data-aos="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">Projects</h2>
              <p className="text-xl text-gray-200">Coming soon...</p>
            </div>
          </section>

          <section id="interests" className="py-24 px-6 text-center" data-aos="fade-up">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-cyan-400">Non-Tech Interests</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {[
                  { name: 'Philosophy', icon: '🧘' },
                  { name: 'Psychology', icon: '🧠' },
                  { name: 'Environment & Nature', icon: '🌱' },
                  { name: 'Reading', icon: '📚' },
                  { name: 'Fitness', icon: '💪' },
                  { name: 'Music', icon: '🎧' },
                  { name: 'Movies & Webseries', icon: '🎬' },
                  { name: 'Traveling', icon: '✈️' },
                ].map((interest, index) => (
                  <Tilt key={index} glareEnable glareMaxOpacity={0.2} scale={1.05} transitionSpeed={250}>
                    <div
                      className="bg-gradient-to-br from-cyan-700 to-indigo-700 py-4 px-6 rounded-xl shadow-xl hover:shadow-cyan-400 flex flex-col items-center justify-center gap-2 text-lg"
                      data-aos="zoom-in"
                      data-aos-delay={`${index * 100}`}
                    >
                      <span className="text-2xl">{interest.icon}</span>
                      {interest.name}
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-24 px-6 text-center" data-aos="fade-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">Contact</h2>
              <form
  action="https://formspree.io/f/xkgbpnzb"
  method="POST"
  className="space-y-5"
  onSubmit={handleSubmit}
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="w-full px-5 py-3 rounded border border-gray-300 bg-white/10 text-white placeholder-gray-300"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="w-full px-5 py-3 rounded border border-gray-300 bg-white/10 text-white placeholder-gray-300"
    required
  />
  <textarea
    name="message"
    placeholder="Your Message"
    rows={4}
    className="w-full px-5 py-3 rounded border border-gray-300 bg-white/10 text-white placeholder-gray-300"
    required
  ></textarea>

  {/* Honeypot field for spam protection */}
  <input type="text" name="_gotcha" style={{ display: 'none' }} />

  <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-full transition">
    Submit
  </button>
</form>

{/* Status message */}
{status && <p className="mt-4 text-green-400">{status}</p>}


            </div>
          </section>

         <footer className="text-center text-gray-400 py-6 text-sm">
  © 2025 Omkar | All rights reserved |{" "}
  <a 
    href="https://github.com/itz-omkar-shinde-1432/portfolio-omkar/tree/main" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="underline hover:text-gray-300"
  >
    View Source Code
  </a>
  <br />
  Built with React & Next.js, Tailwind CSS, AOS Animations, Vercel Hosting.
</footer>

        </main>
      </div>
    </div>
  );
}
