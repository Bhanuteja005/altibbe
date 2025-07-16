import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const header = document.querySelector('.header');
      if (header && !header.contains(event.target as Node) && mobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          CareerBoost
        </Link>
        
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        
        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={closeMobileMenu}>Jobs</Link></li>
            <li><Link to="/admin" onClick={closeMobileMenu}>Admin</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
