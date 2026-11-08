"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "./content";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);
  function sendEnquiry(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = ["Hello Calagan Construction, I would like to make a project enquiry.", `Name: ${data.get("name")}`, `Phone: ${data.get("phone")}`, `Service: ${data.get("service")}`, `Location: ${data.get("location")}`, `Project details: ${data.get("details")}`].join("\n");
    setSent(true);
    window.open(`https://wa.me/254715212295?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return <form className="enquiry-form" onSubmit={sendEnquiry}><div className="form-title"><span>PROJECT ENQUIRY</span><h3>Tell us what you want to build.</h3><p>Complete the short form and send your enquiry directly to our WhatsApp team.</p></div><div className="form-row"><label>Your name<input name="name" placeholder="e.g. Alex Mwangi" required /></label><label>Phone number<input name="phone" type="tel" placeholder="e.g. 0712 345 678" required /></label></div><div className="form-row"><label>Service required<select name="service" defaultValue="" required><option value="" disabled>Choose a service</option>{services.map(s => <option key={s.title}>{s.title}</option>)}<option>Other / Not sure yet</option></select></label><label>Project location<input name="location" placeholder="Town or area" required /></label></div><label>Brief project details<textarea name="details" rows="4" placeholder="Tell us a little about your project..." required /></label><button className="button button-light submit-button" type="submit">Send enquiry via WhatsApp <ArrowUpRight size={17} /></button>{sent && <p className="form-success" role="status">Your enquiry is ready in WhatsApp. Send it there to reach our team.</p>}<small>Your details will be used to respond to this enquiry. No payment is taken through this form.</small></form>;
}
