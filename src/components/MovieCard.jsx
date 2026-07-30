import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', width: '200px', borderRadius: '8px' }}>
      <img src={movie?.image || "https://via.placeholder.com/150"} alt={movie?.title} style={{ width: '100%' }} />
      <h3>{movie?.title || "Tên phim"}</h3>
      <p>{movie?.description || "Mô tả..."}</p>
      <Link to={`/movie/${movie?.id || 1}`}>Xem chi tiết</Link>
    </div>
  );
}