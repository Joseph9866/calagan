import { ArrowRight, ArrowUpRight, Building2, Check, DraftingCompass, HardHat, Paintbrush, Ruler } from "lucide-react";

export const services = [
  { icon: Building2, image: "modern-residence.jpg", title: "Building construction", text: "Well considered building works, planned around your brief, site and specifications." },
  { icon: Ruler, image: "residential-construction.jpg", title: "Civil engineering works", text: "Practical civil works for building and infrastructure projects." },
  { icon: DraftingCompass, image: "drawing.jpeg", title: "Architectural & structural drawings", text: "House plans, architectural concepts and project-specific drawing support." },
  { icon: Paintbrush, image: "architectural-maroon-roof-bungalow.jpg", title: "Renovations & alterations", text: "Thoughtful improvements that make existing spaces work better." },
  { icon: HardHat, image: "kitchen interior.jpeg", title: "Plumbing works", text: "Dependable plumbing for new builds and property improvements." },
  { icon: Check, image: "Hidden roof.jpeg", title: "Construction materials", text: "Materials supply to support your construction requirements." },
];

export function Eyebrow({ children, dark = false }) {
  return <p className={`eyebrow${dark ? " dark" : ""}`}><span />{children}</p>;
}

export function PageIntro({ number, label, eyebrow, title, children }) {
  return <section className="inner-hero"><div className="page-width"><div className="section-kicker">{number} <span> / </span> {label}</div><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1>{children && <div className="inner-lead">{children}</div>}</div></section>;
}

export function ServiceCards({ compact = false }) {
  const list = compact ? services.slice(0, 3) : services;
  return <div className={`service-grid${compact ? " service-grid-compact" : ""}`}>{list.map(({ icon: Icon, image, title, text }, i) => <article className="service-card" key={title}><div className="service-image" aria-hidden="true"><img src={`/Images/${image}`} alt="" /></div><div className="service-top"><Icon size={22} strokeWidth={1.5} /><span>0{i + 1}</span></div><h3>{title}</h3><p>{text}</p><a className="service-card-link" href="/contact" aria-label={`Enquire about ${title}`}><ArrowUpRight size={17} /></a></article>)}</div>;
}

export function ProjectGallery() {
  const projects = [
    ["modern-residence.jpg", "Modern residence design", "01 / RESIDENTIAL", "Modern residence", "project-wide"],
    ["residential-construction.jpg", "Residential construction project", "02 / BUILDING", "Residential building", ""],
    ["architectural-maroon-roof-bungalow.jpg", "Contemporary bungalow design", "03 / DESIGN", "Contemporary bungalow", ""],
    ["kitchen interior.jpeg", "Contemporary kitchen interior", "04 / INTERIORS", "Considered interiors", ""],
    ["Hidden roof.jpeg", "Hidden roof residential design", "05 / RESIDENTIAL", "Hidden roof home", ""],
  ];
  return <div className="project-grid">{projects.map(([src, alt, category, title, cls]) => <figure className={`project-card ${cls}`} key={src}><img src={`/Images/${src}`} alt={alt} /><figcaption><span>{category}</span><strong>{title}</strong></figcaption></figure>)}</div>;
}

export function ProjectCallout() {
  return <section className="project-callout"><div><Eyebrow>BUILT AROUND YOUR PROJECT</Eyebrow><h2>Have a project<br />in mind?</h2><p>Let’s talk about what you want to build, improve or bring to life.</p></div><a className="button button-light" href="/contact">Request a consultation <ArrowRight size={17} /></a><div className="callout-lines" /></section>;
}
