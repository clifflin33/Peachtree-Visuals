import cliffPhoto from "../assets/cliff.jpg";
import willPhoto from "../assets/will.jpg";

export default function Team() {
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
        }}>Meet the Team</h1>
        <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.2rem", lineHeight: 1.6, color: "#555" }}>
          Our team combines creative direction, modeling, and photography to deliver campaigns that resonate with students.
        </p>
      </section>

      <hr />

      <section className="container" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: "40px",
        padding: "0 20px"
      }}>
        {/* CLIFF */}
        <div className="card" style={{ alignItems: "center", textAlign: "center", padding: "30px", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", transition: "all 0.3s" }}>
          <img src={cliffPhoto} alt="Cliff Lin" style={{ width: "220px", borderRadius: "12px", objectFit: "cover", marginBottom: "20px", transition: "transform 0.3s" }} />
          <h2>Cliff — Model & Creative Director</h2>
          <p style={{ color: "#555", lineHeight: 1.6, marginBottom: "15px" }}>
            4th-year Georgia Tech student. Signed with Ursula Wiedmann Models. Experience includes Atlanta Fashion Week, d4vd music video, runway & local Midtown shoots.
          </p>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.instagram.com/cliff_lin33" target="_blank">Instagram</a>
            <a href="https://www.ursulawiedmannmodels.com/portfolio/men-development/men/2591890/cliff-lin" target="_blank">Portfolio</a>
          </div>
        </div>

        {/* WILL */}
        <div className="card" style={{ alignItems: "center", textAlign: "center", padding: "30px", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", transition: "all 0.3s" }}>
          <img src={willPhoto} alt="Will" style={{ width: "220px", borderRadius: "12px", objectFit: "cover", marginBottom: "20px", transition: "transform 0.3s" }} />
          <h2>Will — Photographer</h2>
          <p style={{ color: "#555", lineHeight: 1.6, marginBottom: "15px" }}>
            4th-year Georgia Tech student and part-time GT photographer. Experienced in fashion, portraits, and lifestyle photography.
          </p>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.instagram.com/" target="_blank">Portfolio</a>
          </div>
        </div>
      </section>

      <hr style={{ borderTop: "2px solid #00bcd4", margin: "60px 0" }} />
    </div>
  );
}
