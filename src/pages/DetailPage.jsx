import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function DetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Sau này khi biết API của team, bạn chỉ cần thay đoạn này bằng axios.get(...) hoặc fetch(...)
    const fetchMovieData = async () => {
      setLoading(true);
      try {
        // Dữ liệu mẫu chuẩn cấu trúc API phim
        const dummyMovie = {
          id: id,
          title: 'Spider-Man: Across the Spider-Verse',
          originalTitle: 'Spider-Man: Du Hành Vũ Trụ Nhện',
          poster: 'https://via.placeholder.com/300x450/1e1e2f/ffffff?text=Poster',
          backdrop: 'https://via.placeholder.com/1200x450/111/ffffff?text=Banner+Phim',
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
            { name: 'Oscar Isaac', role: 'Miguel O\'Hara (lồng tiếng)' },
          ],
          trailerUrl: 'https://www.youtube.com/',
        };

        setTimeout(() => {
          setMovie(dummyMovie);
          setLoading(false);
        }, 400);
      } catch (error) {
        console.error('Lỗi lấy dữ liệu phim:', error);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', color: '#fff' }}>
        <h2>Đang tải thông tin phim...</h2>
      </div>
    );
  }

  if (!movie) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', color: '#fff' }}>
        <h2>Không tìm thấy phim này!</h2>
        <Link to="/" style={{ color: '#00d8d6' }}>Quay lại trang chủ</Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#0f0f13', color: '#fff', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* Banner / Backdrop Phim */}
      <div
        style={{
          width: '100%',
          height: '350px',
          backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 19, 0.3), #0f0f13), url(${movie.backdrop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', background: 'rgba(0,0,0,0.6)', padding: '8px 15px', borderRadius: '20px', fontSize: '0.9rem' }}>
            &larr; Trở về
          </Link>
        </div>
      </div>

      {/* Nội dung chi tiết */}
      <div style={{ maxWidth: '1200px', margin: '-100px auto 0', padding: '0 20px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          
          {/* Cột Trái: Poster + Nút Thao Tác */}
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
                  fontSize: '1rem',
                }}
                onClick={() => alert('Chức năng xem phim đang cập nhật!')}
              >
                ▶ Xem Phim
              </button>

              <button
                style={{
                  padding: '10px',
                  backgroundColor: isFavorite ? '#444' : '#222',
                  color: isFavorite ? '#ff4757' : '#fff',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  cursor: 'pointer',
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
            <div style={{ display: 'flex', gap: '10px', margin: '15px 0' }}>
              {movie.genres.map((g, idx) => (
                <span key={idx} style={{ background: '#222', border: '1px solid #333', padding: '4px 12px', borderRadius: '15px', fontSize: '0.85rem' }}>
                  {g}
                </span>
              ))}
            </div>

            {/* Thông số nhanh */}
            <div style={{ display: 'flex', gap: '20px', background: '#181820', padding: '15px', borderRadius: '8px', margin: '20px 0' }}>
              <div>⭐ <strong>{movie.rating}</strong>/10</div>
              <div>⏱️ {movie.duration}</div>
              <div>📅 {movie.releaseDate}</div>
              <div>🌐 {movie.country}</div>
            </div>

            {/* Nội dung phim */}
            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ borderBottom: '2px solid #e50914', paddingBottom: '5px', display: 'inline-block' }}>Tóm Tắt Phim</h3>
              <p style={{ lineHeight: '1.7', color: '#ccc' }}>{movie.overview}</p>
            </div>

            {/* Đạo diễn & Diễn viên */}
            <div>
              <p><strong>Đạo diễn:</strong> {movie.director}</p>
              <strong>Diễn viên tham gia:</strong>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px', marginTop: '10px' }}>
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