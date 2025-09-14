import Navbar from "./layout/navbar"; // Capital N
import Home from "./pages/Home";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // for toggle functionality
import "./App.css";
import { Link } from "react-router-dom";  

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-lilac">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-dark" to="/">
            Full Stack App
          </Link>
          <Link className="btn btn-outline-light" to="/adduser">
            + Add User
          </Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
