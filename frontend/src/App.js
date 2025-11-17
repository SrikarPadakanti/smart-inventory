
import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <NavBar />
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
