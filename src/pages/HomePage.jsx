import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

export default function HomePage() {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // Dữ liệu mẫu chứa hình ảnh chất lượng cao từ TMDB
    const mockData = [
      {
        id: 1,
        title: 'Avatar: The Way of Water',
        poster: '/images/avatar-way-of-water.jpg',
        banner: '/images/avatar-way-of-water.jpg',
        rating: 8.5,
        year: 2022,
        isFeatured: true,
        desc: 'Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family...'
      },
      {
        id: 2,
        title: 'Oppenheimer',
        poster: '/images/avatar-way-of-water.jpg',
        rating: 8.9,
        year: 2023,
        isFeatured: false,
        desc: 'The story of J. Robert Oppenheimer role in the development of the atomic bomb during World War II.'
      },
      {
        id: 3,
        title: 'Interstellar',
        poster: '/images/avatar-way-of-water.jpg',
        rating: 8.6,
        year: 2014,
        isFeatured: false,
        desc: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity survival.'
      },
      {
        id: 4,
        title: 'Spider-Man: Across the Spider-Verse',
        poster: '/images/avatar-way-of-water.jpg',
        rating: 8.7,
        year: 2023,
        isFeatured: false,
        desc: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.'
      }
    ];

    setFeaturedMovies(mockData.filter(movie => movie.isFeatured));
    setTrendingMovies(mockData);
  }, []);

  const heroMovie = featuredMovies[0];

  return (
    <div className="homepage-container">
      {/* Hero Banner Section */}
      {heroMovie && (
        <section 
          className="hero-banner"
          style={{
            backgroundImage: `linear-gradient(to top, #141414 10%, rgba(20,20,20,0.4) 50%, rgba(20,20,20,0.8) 100%), url(${heroMovie.poster})`
          }}
        >
          <div className="hero-content">
            <span className="badge-featured">PHIM NỔI BẬT</span>
            <h1 className="hero-title">{heroMovie.title}</h1>
            <p className="hero-meta">
              <span>Năm: {heroMovie.year}</span>
              <span className="rating-star">⭐ {heroMovie.rating}/10</span>
            </p>
            <p className="hero-desc">{heroMovie.desc}</p>
            <div className="hero-actions">
              <button 
                className="btn-play"
                onClick={() => alert(`Đang phát: ${heroMovie.title}`)}
              >
                ▶ Xem Ngay
              </button>
              <button className="btn-info">ℹ Thông Tin Chi Tiết</button>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Section */}
      <main className="main-content">
        <section className="movie-section">
          <h2 className="section-title">Phim Thịnh Hành</h2>
          
          <div className="movie-grid">
            {trendingMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}