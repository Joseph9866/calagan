import { Eyebrow, PageIntro, ProjectCallout, ServiceCards } from "../content";

export const metadata = { title: "Construction Services | Calagan Construction" };

export default function ServicesPage() {
  return <main><PageIntro number="02" label="WHAT WE DO" eyebrow="OUR SERVICES" title={<>Practical expertise.<br /><em>Thoughtful delivery.</em></>}><p>Building and construction services shaped around your requirements. Tell us what you have in mind and we can discuss the scope and next steps together.</p></PageIntro><section className="services section services-page"><div className="section-kicker">OUR CAPABILITIES <span> / </span> 06 SERVICES</div><ServiceCards /></section><section className="section service-note"><Eyebrow dark>LET’S DISCUSS YOUR PROJECT</Eyebrow><h2>Find the right way <em>forward.</em></h2><p>Share your project type, location, scope and any available plans. We’ll help identify the information needed to take the next step.</p></section><ProjectCallout /></main>;
}
