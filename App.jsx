import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import "./styles.css";

const Header = () => (
  <header className="navbar">
    <h1 className="logo">The TrioTone</h1>
    <nav className="nav-links">
      <Link to="/">Start</Link>
      <Link to="/about">Band</Link>
      <Link to="/contact">Reach Out</Link>
    </nav>
  </header>
);

const MainPage = () => (
  <section className="container text-center">
    <h2 className="title">Feel the Pulse of TrioTone</h2>
    <p className="subtitle">Three musicians. One sound. Infinite vibes.</p>
    <Card className="card">
      <CardContent className="card-content">
        <p>Fresh tracks, upcoming shows, behind the scenes & more.</p>
        <Button className="button">Explore Tracks</Button>
      </CardContent>
    </Card>
  </section>
);

const BandInfo = () => (
  <section className="container">
    <h2 className="section-title">Who We Are</h2>
    <p>TrioTone blends rhythm, soul, and electronic edge in a unique sonic fusion.</p>
    <ul className="list">
      <li><strong>Jamie</strong> — Vox & Guitar</li>
      <li><strong>Riley</strong> — Percussion</li>
      <li><strong>Drew</strong> — Bassline & Synthscape</li>
    </ul>
  </section>
);

const GetInTouch = () => (
  <section className="container">
    <h2 className="section-title">Let's Talk</h2>
    <form className="form">
      <input type="text" placeholder="Name" className="input" />
      <input type="email" placeholder="Email" className="input" />
      <textarea placeholder="Message" className="textarea"></textarea>
      <Button className="button">Send</Button>
    </form>
  </section>
);

export default function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<BandInfo />} />
            <Route path="/contact" element={<GetInTouch />} />
          </Routes>
        </main>
        <footer className="footer">© 2025 TrioTone. Music for the bold.</footer>
      </div>
    </Router>
  );
}