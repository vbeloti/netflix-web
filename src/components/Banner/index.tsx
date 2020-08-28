import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import requests from '../../services/request';

import './styles.css';

interface movieProps {
  backdrop_path: string;
  overview: string;
  name: string;
  original_name: string;
  title: string;
}

const Banner: React.FC = () => {
  const [movie, setMovie] = useState<movieProps>({} as movieProps);

  useEffect(() => {
    async function getMovie() {
      const response = await api.get(requests.fetchNetflixOriginals);
      const randomPosition = Math.floor(
        Math.random() * response.data.results.length - 1,
      );
      return setMovie(response.data.results[randomPosition]);
    }

    getMovie();
  }, []);

  function truncate(str: string, n: number) {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  }

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `${movie.backdrop_path && `url(https://image.tmdb.org/t/p/original${movie.backdrop_path}`})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner_buttons">
          <button type="button" className="banner__button">
            Assistir
          </button>
          <button type="button" className="banner__button">
            Minha Lista
          </button>
        </div>

        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
