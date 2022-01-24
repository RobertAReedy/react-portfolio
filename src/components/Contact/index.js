import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2 class="header-text">Contact Me</h2>

      <label className="contact-label">Name:</label>
      <textarea className="contact-textarea"></textarea>
      <label className="contact-label">Email:</label>
      <textarea className="contact-textarea"></textarea>
      <label className="contact-label">Message:</label>
      <textarea className="contact-textarea" id="message-text"></textarea>

      <button className="submit">Submit</button>
    </section>
  );
}

export default Contact;