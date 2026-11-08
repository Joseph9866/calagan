import { Phone } from "lucide-react";
import { Eyebrow, PageIntro } from "../content";
import EnquiryForm from "../enquiry-form";

export const metadata = { title: "Contact Calagan Construction" };

export default function ContactPage() {
  return <main><PageIntro number="05" label="CONTACT CALAGAN" eyebrow="LET’S TALK ABOUT YOUR PROJECT" title={<>Ready to take<br /><em>the next step?</em></>}><p>Tell us what you have in mind. We’re ready to discuss your project and help you find a way forward.</p></PageIntro><section className="section contact contact-page"><div className="contact-grid"><div className="contact-copy"><Eyebrow>GET IN TOUCH</Eyebrow><h2>We’re here to <em>help.</em></h2><p>Contact Calagan Construction Company Limited to discuss your project or request a consultation.</p><div className="contact-actions"><a className="button button-light" href="tel:+254715212295"><Phone size={16} /> Call +254 715 212 295</a><a className="button button-ghost" href="https://wa.me/254715212295" target="_blank" rel="noreferrer">WhatsApp us ↗</a></div><div className="contact-details"><a href="tel:+254715212295"><span>PHONE</span>+254 715 212 295</a><a href="mailto:Calaganconstructionltd@gmail.com"><span>EMAIL</span>Calaganconstructionltd@gmail.com</a><div><span>LOCATION</span>Nairobi, Kenya</div></div></div><EnquiryForm /></div></section></main>;
}
