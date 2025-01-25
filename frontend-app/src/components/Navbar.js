// Component (Small Part of Webpage.)

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Mentor Management</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;