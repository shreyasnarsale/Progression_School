export default function Contact() {
  return (
    <>
      <h1>Contact Us</h1>

      <div className="contact-grid">
        <div className="card">
          <h3>Get In Touch</h3>
          <p>📧 contact@example.com</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>📍 123 React Router St.</p>
        </div>

        <div className="card">
          <h3>Send Us a Message</h3>
          <input placeholder="Your Name" />
          <input placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button className="btn">Send Message</button>
        </div>
      </div>
    </>
  );
}
