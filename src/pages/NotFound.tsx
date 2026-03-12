import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#fafdf7", fontFamily: "'Outfit', sans-serif" }}>
      <h1 style={{ fontSize: 72, fontWeight: 900, color: "#1a2e1a", margin: "0 0 8px" }}>404</h1>
      <p style={{ fontSize: 18, color: "#6b7280", marginBottom: 24 }}>Oops! Page not found</p>
      <a href="/" style={{ fontSize: 15, color: "#22543d", textDecoration: "underline", fontWeight: 600 }}>Return to Home</a>
    </div>
  );
};

export default NotFound;
