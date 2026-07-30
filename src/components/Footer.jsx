import React from 'react';
import './Footer.css'; // Import file CSS ở đây

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Main Grid Section */}
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <h2 className="footer-logo">
              Hien<span>Loz</span>
            </h2>
            <p className="footer-desc">
             Hệ Thống Website Xem Sex Nổi Tiếng Số Một Việt Nam Do Phạm Minh Hiển Vận Hành Nhe Các Chú Công An ơi
            </p>
            <div className="social-links">
              {/* GitHub */}
              <a href="#" className="social-icon" aria-label="GitHub">
                <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-title">Liên kết</h3>
            <ul className="footer-links">
              <li><a href="#">Trang chủ</a></li>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Sản phẩm</a></li>
              <li><a href="#">Dịch vụ</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="footer-col">
            <h3 className="footer-title">Hỗ trợ</h3>
            <ul className="footer-links">
              <li><a href="#">Trung tâm trợ giúp</a></li>
              <li><a href="#">Điều khoản dịch vụ</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col newsletter-col">
            <h3 className="footer-title">Đăng ký bản tin</h3>
            <p className="footer-desc">Nhận thông tin cập nhật và ưu đãi mới nhất từ chúng tôi.</p>
            <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Nhập email của bạn..." 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                <span>Đăng ký ngay</span>
              </button>
            </form>
          </div>

        </div>

        {/* Divider & Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HienLoz. Tất cả các quyền được bảo lưu.</p>
          <div className="footer-bottom-links">
            <a href="#">Quyền riêng tư</a>
            <a href="#">Điều khoản</a>
            <a href="#">Bảo mật</a>
          </div>
        </div>

      </div>
    </footer>
  );
}