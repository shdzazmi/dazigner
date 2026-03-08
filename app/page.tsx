"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type ParallaxState = {
  x: number;
  y: number;
};

const highlights = [
  {
    title: "Signature Work",
    subtitle: "Fintech dashboard redesign",
    description:
      "Increased onboarding completion by 31% through modular flows, sharper contrast hierarchy, and habit-loop onboarding cues.",
    tone: "Canary in Action"
  },
  {
    title: "Creative Direction",
    subtitle: "Streetwear ecommerce launch",
    description:
      "Built a design system from moodboard to motion prototypes that boosted average order value by 18% within two months.",
    tone: "Visual Velocity"
  },
  {
    title: "Brand Systems",
    subtitle: "SaaS positioning sprint",
    description:
      "Led a two-week identity reboot and voice framework that aligned product, sales, and customer success messaging.",
    tone: "Bold Clarity"
  }
];

const testimonials = [
  {
    quote:
      "Ari shipped pixel-perfect design at startup speed. Every review felt like strategy, not just style.",
    name: "Nina Cole",
    role: "VP Product, Arc Labs"
  },
  {
    quote:
      "The neo-brutalist direction made us stand out overnight. Leads mentioned the site in their first call.",
    name: "Marcus Vale",
    role: "Founder, Noir Commerce"
  }
];

export default function Home() {
  const [parallax, setParallax] = useState<ParallaxState>({ x: 0, y: 0 });
  const [cursor, setCursor] = useState<ParallaxState>({ x: -100, y: -100 });
  const [cursorActive, setCursorActive] = useState(false);
  const [status, setStatus] = useState("Send a project brief");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5) * 26;
      const y = (event.clientY / innerHeight - 0.5) * 26;
      setParallax({ x, y });
      setCursor({ x: event.clientX, y: event.clientY });
    };

    const handlePointerDown = () => setCursorActive(true);
    const handlePointerUp = () => setCursorActive(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mouseup", handlePointerUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);
    };
  }, []);

  useEffect(() => {
    const revealTargets = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    revealTargets.forEach((node) => observer.observe(node));

    return () => {
      revealTargets.forEach((node) => observer.unobserve(node));
      observer.disconnect();
    };
  }, []);

  const heroTransform = useMemo(
    () => ({
      transform: `translate(${parallax.x}px, ${parallax.y}px)`
    }),
    [parallax]
  );

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Brief received. I will reply within 24 hours.");
  };

  return (
    <main className="page">
      <div
        className={`custom-cursor ${cursorActive ? "active" : ""}`}
        style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
        aria-hidden="true"
      />

      <section className="hero scroll-reveal">
        <p className="kicker">Neo-Brutalist Portfolio</p>
        <div className="hero-grid">
          <div>
            <h1>
              Designing loud digital products for founders who refuse to blend in.
            </h1>
            <p>
              I am Ari Volt, a product designer crafting conversion-focused
              interfaces with unapologetic typography, structured systems, and
              motion that feels alive.
            </p>
            <a href="#contact" className="cta magnetic">
              Start a project
            </a>
          </div>
          <div className="hero-card magnetic" style={heroTransform}>
            <span className="chip">Open for Q3 Collaborations</span>
            <p>
              Specialties: Product UI, design systems, creative direction,
              prototyping, and high-velocity design sprints.
            </p>
          </div>
        </div>
      </section>

      <section className="bento scroll-reveal">
        <article className="tile feature">
          <h2>Case Studies</h2>
          <p>Asymmetric stories that show how design decisions move metrics.</p>
          <div className="stats">
            <div>
              <strong>12+</strong>
              <span>Products launched</span>
            </div>
            <div>
              <strong>95%</strong>
              <span>Client retention</span>
            </div>
          </div>
        </article>

        {highlights.map((item) => (
          <article className="tile hover-reveal magnetic" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <div className="overlay">
              <span>{item.tone}</span>
              <p>{item.description}</p>
            </div>
          </article>
        ))}

        <article className="tile testimonial-block">
          <h2>Testimonials</h2>
          <ul>
            {testimonials.map((testimonial) => (
              <li key={testimonial.name}>
                <p>“{testimonial.quote}”</p>
                <span>
                  {testimonial.name} · {testimonial.role}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article id="contact" className="tile contact">
          <h2>Contact</h2>
          <p>Tell me what you are building and why now is the right moment.</p>
          <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="message">Project brief</label>
            <textarea id="message" name="message" rows={4} required />
            <button type="submit" className="magnetic">
              Send
            </button>
          </form>
          <p className="form-status">{status}</p>
        </article>
      </section>
    </main>
  );
}
