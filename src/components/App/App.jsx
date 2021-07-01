import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

function App() {
  return (
    <div className="app">
      {/* Nav Section */}
      <Nav />

      {/* landing page */}
      <Landing />
      {/* Challenge Section */}
      <ChallengeSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
