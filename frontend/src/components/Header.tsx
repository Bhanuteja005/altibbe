import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          CareerBoost
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Jobs</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
