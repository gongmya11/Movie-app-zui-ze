import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

export default function HomePage() {
  // State lưu danh sách phim
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  // Mô phỏng fetching dữ liệu từ API khi component mount
  useEffect(() => {
    // Dữ liệu mẫu (Mock data)
    const mockData = [
      {
        id: 1,
        title: 'Avatar: The Way of Water',
        poster: 'https://via.placeholder.com/300x450',
        banner: 'https://via.placeholder.com/1200x400',
        rating: 8.5,
        year: 2022,
        isFeatured: true
      },
      {
        id: 2,
        title: 'Oppenheimer',
        poster: 'https://via.placeholder.com/300x450',
        rating: 8.9,
        year: 2023,
        isFeatured: false
      },
      {
        id: 3,
        title: 'Interstellar',
        poster: 'https://via.placeholder.com/300x450',
        rating: 8.6,
        year: 2014,
        isFeatured: false
      },
      {
        id: 4,
        title: 'Spider-Man: Across the Spider-Verse',
        poster: 'https://via.placeholder.com/300x450',
        rating: 8.7,
        year: 2023,
        isFeatured: false
      }
    ];

    // Lọc và cập nhật vào state
    setFeaturedMovies(mockData.filter(movie => movie.isFeatured));
    setTrendingMovies(mockData);
  }, []);

  const heroMovie = featuredMovies[0];

  return (
    <div className="homepage-container">
      {/* 1. Hero Banner Section */}
      {heroMovie && (
        <section 
          className="hero-banner"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${heroMovie.banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '100px 20px 40px',
            color: '#fff',
            marginBottom: '30px'
          }}
        >
          <div className="hero-content" style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{heroMovie.title}</h1>
            <p style={{ marginBottom: '15px' }}>
              Năm phát hành: {heroMovie.year} | Đánh giá: ⭐ {heroMovie.rating}/10
            </p>
            <button 
              style={{
                padding: '10px 24px',
                backgroundColor: '#e50914',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              onClick={() => alert(`Xem phim: ${heroMovie.title}`)}
            >
              Xem ngay
            </button>
          </div>
        </section>
      )}

      {/* 2. Main Content Section */}
      <div className="main-content" style={{ padding: '0 20px' }}>
        <section className="movie-section" style={{ marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '20px', color: '#333' }}>Phim Nổi Bật</h2>
          
          {/* Render danh sách phim sử dụng MovieCard */}
          <div 
            className="movie-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '20px'
            }}
          >
            {trendingMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}