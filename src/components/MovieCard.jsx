import React from 'react';

export default function MovieCard({ movie }) {
  // Ưu tiên lấy movie.poster, nếu không có sẽ tự lấy movie.image
  const imgUrl = movie?.poster || movie?.image || 'https://via.placeholder.com/300x450?text=No+Poster';

  return (
    <div className="movie-card">
      <div className="card-image-wrap" style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
        <img 
          src={imgUrl} 
          alt={movie.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '6px 6px 0 0'
          }}
          // Xử lý khi ảnh lỗi sẽ tự thay bằng ảnh placeholder
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://via.placeholder.com/300x450?text=Image+Error';
          }}
        />
        {movie.rating && (
          <span className="card-rating" style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: '#f1c40f',
            padding: '2px 8px',
            borderRadius: '10px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            ⭐ {movie.rating}
          </span>
        )}
      </div>

      <div className="movie-card-body" style={{ padding: '12px' }}>
        <h3 className="movie-card-title" style={{ fontSize: '15px', color: '#fff', marginBottom: '6px' }}>
          {movie.title}
        </h3>
        <p className="movie-card-desc" style={{ fontSize: '13px', color: '#aaa', marginBottom: '10px' }}>
          {movie.desc ? `${movie.desc.substring(0, 45)}...` : 'Mô tả bộ phim...'}
        </p>
        <a href={`/detail/${movie.id}`} className="movie-card-link" style={{ color: '#e50914', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px' }}>
          Xem chi tiết →
        </a>
      </div>
    </div>
  );
}