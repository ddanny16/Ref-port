import { useNavigate } from "react-router-dom";
import "./styles.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to login page
  };

  return (
    <div>
      {/* 🔹 Header */}
      <header className="header">
        <h1>My Website</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>

      {/* 🔹 Hero Section */}
      <section className="hero">
        <h2>Welcome to the Dashboard</h2>
        <p>Explore the features of this site.</p>
      </section>

      {/* 🔹 Content Section */}
      <section className="content">
        <h2>Our Services</h2>
        <p>We provide the best solutions for your needs.</p>
      </section>

      {/* 🔹 Footer */}
      <footer className="footer">
        <p>© 2025 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
