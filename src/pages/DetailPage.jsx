import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function DetailPage() {
  const { id } = useParams(); // Lấy ID từ URL (vd: /movie/1, /movie/100000)
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      setLoading(true);
      setError(false);

      try {
        // Danh sách dữ liệu mẫu đồng bộ hoàn toàn với danh sách bên HomePage
        const mockDataList = [
          {
            id: 1,
            title: 'Avatar: The Way of Water',
            originalTitle: 'Avatar: Dòng Dòng Nước',
            poster: 'https://via.placeholder.com/300x450',
            backdrop: 'https://via.placeholder.com/1200x400',
            rating: 8.5,
            releaseDate: '16/12/2022',
            duration: '192 phút',
            country: 'Mỹ',
            genres: ['Hành động', 'Phiêu lưu', 'Khoa học viễn tưởng'],
            overview:
              'Jake Sully sống cùng gia đình mới của mình trên hành tinh Pandora. Khi một mối đe dọa quen thuộc quay trở lại để hoàn thành những gì đã bắt đầu, Jake phải hợp tác với Neytiri và quân đội của chủng tộc Na\'vi để bảo vệ hành tinh của họ.',
            director: 'James Cameron',
            cast: [
              { name: 'Sam Worthington', role: 'Jake Sully' },
              { name: 'Zoe Saldana', role: 'Neytiri' },
              { name: 'Sigourney Weaver', role: 'Kiri' }
            ]
          },
          {
            id: 2,
            title: 'Oppenheimer',
            originalTitle: 'Oppenheimer',
            poster: 'https://via.placeholder.com/300x450',
            backdrop: 'https://via.placeholder.com/1200x400',
            rating: 8.9,
            releaseDate: '21/07/2023',
            duration: '180 phút',
            country: 'Mỹ',
            genres: ['Tiểu sử', 'Chính kịch', 'Lịch sử'],
            overview:
              'Câu chuyện về nhà vật lý lý thuyết J. Robert Oppenheimer, người đóng vai trò quan trọng trong Dự án Manhattan - chương trình phát triển vũ khí hạt nhân đầu tiên trên thế giới.',
            director: 'Christopher Nolan',
            cast: [
              { name: 'Cillian Murphy', role: 'J. Robert Oppenheimer' },
              { name: 'Emily Blunt', role: 'Katherine Oppenheimer' },
              { name: 'Matt Damon', role: 'Leslie Groves' }
            ]
          },
          {
            id: 3,
            title: 'Interstellar',
            originalTitle: 'Hố Đen Tử Thần',
            poster: 'https://via.placeholder.com/300x450',
            backdrop: 'https://via.placeholder.com/1200x400',
            rating: 8.6,
            releaseDate: '07/11/2014',
            duration: '169 phút',
            country: 'Mỹ',
            genres: ['Phiêu lưu', 'Chính kịch', 'Khoa học viễn tưởng'],
            overview:
              'Khi Trái Đất dần trở nên không thể sống được nữa, một nhóm các nhà nghiên cứu khai phá vũ trụ phải sử dụng một lỗ sâu mới được khám phá để vượt qua các giới hạn về không gian và tìm một hành tinh có thể sinh sống cho con người.',
            director: 'Christopher Nolan',
            cast: [
              { name: 'Matthew McConaughey', role: 'Cooper' },
              { name: 'Anne Hathaway', role: 'Brand' },
              { name: 'Jessica Chastain', role: 'Murph' }
            ]
          },
          {
            id: 4,
            title: 'Spider-Man: Across the Spider-Verse',
            originalTitle: 'Người Nhện: Du Hành Vũ Trụ Nhện',
            poster: 'https://via.placeholder.com/300x450',
            backdrop: 'https://via.placeholder.com/1200x400',
            rating: 8.7,
            releaseDate: '02/06/2023',
            duration: '140 phút',
            country: 'Mỹ',
            genres: ['Hoạt hình', 'Hành động', 'Phiêu lưu'],
            overview:
              'Miles Morales tái xuất trong phần tiếp theo của bom tấn hoạt hình đoạt giải Oscar. Lần này, anh sẽ du hành qua các vũ trụ song song và chạm trán với một đội ngũ Người Nhện chịu trách nhiệm bảo vệ sự tồn vong của đa vũ trụ.',
            director: 'Joaquim Dos Santos, Kemp Powers',
            cast: [
              { name: 'Shameik Moore', role: 'Miles Morales (lồng tiếng)' },
              { name: 'Hailee Steinfeld', role: 'Gwen Stacy (lồng tiếng)' },
              { name: 'Oscar Isaac', role: 'Miguel O\'Hara (lồng tiếng)' }
            ]
          }
        ];

        // Tìm phim theo ID trong danh sách (Chuyển cả 2 sang Number hoặc String để so sánh chuẩn)
        const foundMovie = mockDataList.find((item) => String(item.id) === String(id));

        setTimeout(() => {
          if (foundMovie) {
            setMovie(foundMovie);
          } else {
            // Nếu không tìm thấy phim (VD: /movie/100000)
            setError(true);
          }
          setLoading(false);
        }, 300);
      } catch (err) {
        console.error('Lỗi khi tải dữ liệu:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  // 1. Trạng thái Đang tải dữ liệu
  if (loading) {
    return (
      <div style={{ backgroundColor: '#0f0f13', color: '#fff', minHeight: '100vh', textAlign: 'center', padding: '100px 20px' }}>
        <h2>⏳ Đang tải thông tin phim...</h2>
      </div>
    );
  }

  // 2. Trạng thái Lỗi / Không tìm thấy phim (VD: nhập id 100000)
  if (error || !movie) {
    return (
      <div style={{ backgroundColor: '#0f0f13', color: '#fff', minHeight: '100vh', textAlign: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '4rem', color: '#e50914', marginBottom: '10px' }}>404</h1>
        <h2>Không tìm thấy bộ phim này!</h2>
        <p style={{ color: '#aaa', margin: '15px 0 30px' }}>ID phim "{id}" không tồn tại hoặc đã bị xóa.</p>
        <Link
          to="/"
          style={{
            padding: '10px 20px',
            backgroundColor: '#e50914',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}
        >
          &larr; Quay lại Trang chủ
        </Link>
      </div>
    );
  }

  // 3. Trạng thái Hiển thị Chi tiết Phim khi tìm thấy
  return (
    <div style={{ backgroundColor: '#0f0f13', color: '#fff', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* Banner / Backdrop Phim */}
      <div
        style={{
          width: '100%',
          height: '350px',
          backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 19, 0.4), #0f0f13), url(${movie.backdrop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <Link
            to="/"
            style={{
              color: '#fff',
              textDecoration: 'none',
              background: 'rgba(0,0,0,0.6)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              display: 'inline-block'
            }}
          >
            &larr; Trở về
          </Link>
        </div>
      </div>

      {/* Nội dung chi tiết phim */}
      <div style={{ maxWidth: '1200px', margin: '-100px auto 0', padding: '0 20px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          {/* Cột Trái: Poster + Các nút hành động */}
          <div style={{ flex: '0 0 280px', width: '100%' }}>
            <img
              src={movie.poster}
              alt={movie.title}
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 25px rgba(0,0,0,0.7)' }}
            />

            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                style={{
                  padding: '12px',
                  backgroundColor: '#e50914',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
                onClick={() => alert(`Đang phát phim: ${movie.title}`)}
              >
                ▶ Xem Phim
              </button>

              <button
                style={{
                  padding: '10px',
                  backgroundColor: isFavorite ? '#333' : '#222',
                  color: isFavorite ? '#ff4757' : '#fff',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {isFavorite ? '♥ Đã lưu vào Yêu thích' : '♡ Thêm vào Yêu thích'}
              </button>
            </div>
          </div>

          {/* Cột Phải: Thông tin chi tiết */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h1 style={{ fontSize: '2.5rem', margin: '0 0 5px 0' }}>{movie.title}</h1>
            <h3 style={{ color: '#888', fontWeight: '400', marginTop: '0' }}>{movie.originalTitle}</h3>

            {/* Thể loại */}
            <div style={{ display: 'flex', gap: '10px', margin: '15px 0', flexWrap: 'wrap' }}>
              {movie.genres.map((g, idx) => (
                <span
                  key={idx}
                  style={{ background: '#222', border: '1px solid #333', padding: '4px 12px', borderRadius: '15px', fontSize: '0.85rem' }}
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Thông số nhanh */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                background: '#181820',
                padding: '15px',
                borderRadius: '8px',
                margin: '20px 0',
                flexWrap: 'wrap'
              }}
            >
              <div>⭐ <strong>{movie.rating}</strong>/10</div>
              <div>⏱️ {movie.duration}</div>
              <div>📅 {movie.releaseDate}</div>
              <div>🌐 {movie.country}</div>
            </div>

            {/* Tóm tắt nội dung */}
            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ borderBottom: '2px solid #e50914', paddingBottom: '5px', display: 'inline-block' }}>Tóm Tắt Phim</h3>
              <p style={{ lineHeight: '1.7', color: '#ccc' }}>{movie.overview}</p>
            </div>

            {/* Đạo diễn & Diễn viên */}
            <div>
              <p><strong>Đạo diễn:</strong> {movie.director}</p>
              <strong>Diễn viên tham gia:</strong>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                  gap: '10px',
                  marginTop: '10px'
                }}
              >
                {movie.cast.map((item, index) => (
                  <div key={index} style={{ background: '#181820', padding: '10px', borderRadius: '6px' }}>
                    <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#888' }}>{item.role}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}