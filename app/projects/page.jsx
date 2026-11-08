import { Eyebrow, PageIntro, ProjectCallout, ProjectGallery } from "../content";

export const metadata = { title: "Project Gallery | Calagan Construction" };

export default function ProjectsPage() {
  return <main><PageIntro number="04" label="PROJECT GALLERY" eyebrow="A SELECTION OF DESIGN VISUALS" title={<>Spaces that <em>inspire.</em></>}><p>Explore residential, commercial and construction design visuals. If you have a project in mind, we’d be glad to discuss it with you.</p></PageIntro><section className="section projects projects-page"><div className="section-kicker">RESIDENTIAL <span> / </span> BUILDING <span> / </span> INTERIORS</div><ProjectGallery /><p className="gallery-note">Images show design concepts and project visuals. Please confirm approved company work before describing any image as a completed project.</p></section><ProjectCallout /></main>;
}
