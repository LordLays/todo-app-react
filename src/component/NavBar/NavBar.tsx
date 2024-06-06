import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Todo List</Link></li>
        <li><Link to="/color">Color Tutorial</Link></li>
        <li><Link to="/contact">Error Link</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;