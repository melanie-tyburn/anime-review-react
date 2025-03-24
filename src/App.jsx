import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Container } from "react-bootstrap";

function App() {

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/prices" element={<Dashboard />} />
        </Routes>
      </Container>
      <Footer />
      </div>
    </Router>
  )
}

export default App
