import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <a href="/">Movie Minh Hien Loz</a>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/" style={{ color: 'black', marginRight: '15px' }}>Trang chủ</Link></li>
            <li><Link to="/about" style={{ color: 'black' }}>Giới thiệu</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="cta-button">Sign in / Sign Out</button>
        </div>
      </div>
    </header>
  );
}