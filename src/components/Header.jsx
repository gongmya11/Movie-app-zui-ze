import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '15px', background: '#333', color: '#fff' }}>
      <h2>Movie Web</h2>
      <nav>
        <Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Trang chủ</Link>
        <Link to="/about" style={{ color: '#fff' }}>Giới thiệu</Link>
      </nav>
    </header>
  );
}