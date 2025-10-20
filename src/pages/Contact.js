import React, { useState } from "react";
import Tile from "../components/Tile";

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // In a real site you'd send to an API. Here we just emulate success.
    setSent(true);
  }

  return (
    <div>
      <h2>Contact</h2>
      <Tile>
        {sent ? (
          <p>Thanks! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 12 }}>
              <label>Name</label>
              <br />
              <input name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Email</label>
              <br />
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Message</label>
              <br />
              <textarea name="message" value={form.message} onChange={handleChange} required rows="6" />
            </div>
            <button type="submit">Send Message</button>
          </form>
        )}
      </Tile>
    </div>
  );
}

export default Contact;