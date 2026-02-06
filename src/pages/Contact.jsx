export default function Contact() {
  return (
    <div>

      <section className="hero" style={{ padding: "80px 20px", textAlign: "center", background: "#f8f8f8" }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "20px",
          background: "linear-gradient(90deg, #00bcd4, #ff4081)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>Get in Touch</h1>
        <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.2rem", lineHeight: 1.6, color: "#555" }}>
          Interested in working together? Send us a message and we’ll respond quickly.
        </p>
      </section>

      <hr />

      <section className="container" style={{ display: "flex", justifyContent: "center", padding: "0 20px" }}>
        <form action="https://formspree.io/f/yourformid" method="POST" style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "600px",
          padding: "30px",
          borderRadius: "12px",
          background: "#ffffff",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          gap: "15px",
          transition: "all 0.3s"
        }}>
          <input name="name" placeholder="Name" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd", transition: "all 0.3s" }} />
          <input name="email" type="email" placeholder="Email" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd", transition: "all 0.3s" }} />
          <textarea name="message" placeholder="Tell us about your business" style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd", transition: "all 0.3s" }} />
          <button type="submit" style={{
            background: "linear-gradient(90deg, #00bcd4, #ff4081)",
            color: "#fff",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500",
            transition: "all 0.3s"
          }}>Send</button>
        </form>
      </section>

      <hr style={{ borderTop: "2px solid #00bcd4", margin: "60px 0" }} />

    </div>
  );
}
