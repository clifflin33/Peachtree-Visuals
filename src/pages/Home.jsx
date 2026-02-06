import portfolio1 from "../assets/portfolio1.jpg";
import portfolio2 from "../assets/portfolio2.jpg";

export default function Home() {
  const portfolioImages = [portfolio1, portfolio2];

  const whatWeDo = [
    "📸 Social-first photography for Instagram, TikTok & websites",
    "🎓 Student lifestyle campaigns that feel authentic",
    "🎬 Creative direction & shoot planning",
    "🤝 Flexible team of photographers + models",
  ];

  const whyItWorks = [
    "Featuring real Georgia Tech students makes your brand feel modern, authentic, and relevant.",
    "Students engage more, share more, and drive foot traffic.",
    "Builds social presence with authentic student-driven campaigns.",
  ];

  return (
    <div>

      {/* HERO */}
      <section className="hero" style={{ padding: "100px 20px", textAlign: "center", background: "#f8f8f8" }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "20px",
          background: "linear-gradient(90deg, #00bcd4, #ff4081)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "fadeInUp 1s ease forwards"
        }}>
          Student-Powered Social Media Marketing
        </h1>
        <p style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "1.2rem",
          lineHeight: 1.6,
          color: "#555",
          opacity: 0,
          animation: "fadeIn 1.5s ease forwards"
        }}>
          We create professional, lifestyle-driven campaigns to help Midtown businesses connect with Georgia Tech students. Real models, real students, real engagement.
        </p>
      </section>

      <hr />

      {/* WHAT WE DO CARDS */}
      <section className="container" style={{ padding: "0 20px", textAlign: "center" }}>
        <h2 style={{
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "40px",
          background: "linear-gradient(90deg, #ff4081, #ff9800)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          What We Do
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
          justifyItems: "center",
          marginBottom: "60px"
        }}>
          {whatWeDo.map((item, idx) => (
            <div key={idx} className="card" style={{
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              transition: "all 0.3s",
              background: "#fff",
              minHeight: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontWeight: "500"
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* WHY IT WORKS CARDS */}
      <section className="container" style={{ padding: "0 20px", textAlign: "center" }}>
        <h2 style={{
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "40px",
          background: "linear-gradient(90deg, #00bcd4, #ff4081)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Why It Works
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
          justifyItems: "center",
          marginBottom: "60px"
        }}>
          {whyItWorks.map((item, idx) => (
            <div key={idx} className="card" style={{
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              transition: "all 0.3s",
              background: "#fff",
              minHeight: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontWeight: "500",
              color: "#333"
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* PORTFOLIO */}
      <section className="container" style={{ padding: "0 20px" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "40px", textAlign: "center" }}>Portfolio Preview</h2>
        <div className="portfolio-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
          gap: "20px",
          justifyItems: "center"
        }}>
          {portfolioImages.map((img, idx) => (
            <div key={idx} style={{ position: "relative", overflow: "hidden", borderRadius: "12px", cursor: "pointer" }}>
              <img src={img} alt={`Portfolio ${idx+1}`} style={{
                width: "180px",
                borderRadius: "12px",
                objectFit: "cover",
                transition: "transform 0.4s"
              }} />
              <div style={{
                position: "absolute",
                top: 0, left: 0,
                width: "100%", height: "100%",
                background: "rgba(0,188,212,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: 0,
                transition: "opacity 0.4s"
              }}>
                <span style={{ color: "#fff", fontWeight: "600" }}>View</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ borderTop: "2px solid #00bcd4", margin: "60px 0" }} />

    </div>
  );
}
