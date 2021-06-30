import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      {/* Nav Section */}
      <Nav />

      {/* landing page */}
      <Landing />
      {/* Challenge Section */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
