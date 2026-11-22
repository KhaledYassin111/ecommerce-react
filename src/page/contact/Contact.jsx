
import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import PageTransition from "../../component/PageTransition";
import "../sitePages.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update = (e) =>
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));

  const submit = (e) => {
    e.preventDefault();
    toast.success("Thanks! Your message is ready.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PageTransition>
      <main className="site-page">
        <section className="container contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</span>
            <h1>
              Let's talk<span>.</span>
            </h1>

            <p className="page-intro">
              Questions about a product or your shopping experience?
              Send us a message and we'll be happy to help.
            </p>

            <div className="contact-highlight">
              <strong>Need help?</strong>
              <p>Fill in the form and include as much detail as possible.</p>
            </div>
          </div>

          <form className="site-form contact-form" onSubmit={submit}>
            <div className="form-row">
              <label>
                Your name
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label>
              Subject
              <input
                name="subject"
                value={form.subject}
                onChange={update}
                placeholder="How can we help?"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                placeholder="Write your message here..."
                rows="6"
                required
              />
            </label>

            <button className="site-button" type="submit">
              Send message
            </button>
          </form>
        </section>

        {/* Contact Social Footer */}
        <footer className="contact-social-footer">
          <div className="container">
            <h2>Stay Connected With Us</h2>
            <p>Follow us and get in touch through our social media</p>

            <div className="contact-social-icons">
              <a
                href="https://www.facebook.com/share/1FNsChAVvc/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="facebook"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/201068905644"
                target="_blank"
                rel="noreferrer"
                className="whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/khaledyassin42?jplx=MTk5M25hMW12aGE2bw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:khaledyassin8799@gmail.com"
                className="gmail"
                aria-label="Gmail"
              >
                <FaEnvelope />
              </a>
            </div>

            <div className="contact-footer-bottom">
              © {new Date().getFullYear()} All Rights Reserved.
            </div>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
}
