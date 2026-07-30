import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Nhập các thành phần giao diện dùng chung (Components)
import Header from './components/Header';
import Footer from './components/Footer';

// 2. Nhập các trang (Pages) - Mỗi module chỉ khai báo 1 lần duy nhất
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Layout chung: Header cố định phía trên */}
        <Header />

        {/* Cấu hình các tuyến đường chuyển trang */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        {/* Layout chung: Footer cố định phía dưới */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;