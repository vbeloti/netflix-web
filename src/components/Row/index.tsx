import React, { useState, useEffect } from 'react';
import YouTube, { Options } from 'react-youtube';
import movieTrailer from 'movie-trailer';
import api from '../../services/api';

import './styles.css';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/original';

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

interface MoviesProps {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
  title: string;
}

const Row: React.FC<RowProps> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    api.get(fetchUrl).then((data) => setMovies(data.data.results));
  }, [fetchUrl]);

  const opts: Options = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie: MoviesProps) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      try {
        const video: string = await movieTrailer(
          movie.name || movie.original_title || movie.title,
        );

        if (!video) throw new Error('');

        const id = video.replace('https://www.youtube.com/watch?v=', '');
        if (!id) throw new Error('');

        setTrailerUrl(id);
      } catch {
        return null;
      }
    }
  };

  const handleClose = () => {
    setTrailerUrl('');
  };

  if (!movies) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            role="presentation"
            onClick={() => {
              handleClick(movie);
            }}
            className={`row__poster ${isLargeRow && 'row_posterLarge'}`}
            key={movie.id}
            src={`${BASE_URL_IMG}${
              isLargeRow
                ? movie.poster_path
                : movie.backdrop_path || '/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg'
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && (
        <div className="container__youtube">
          <button onClick={handleClose} className="button__close" type="button">X</button>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row;
