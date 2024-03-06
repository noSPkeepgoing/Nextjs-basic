'use client';

import { useEffect, useState } from 'react';

export default function Hello() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(
      'https://nomad-movies.nomadcoders.workers.dev/movies'
    );
    const json = await res.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>Home🏡</h1>
      <div>{isLoading ? 'loading...' : JSON.stringify(movies)}</div>
    </div>
  );
}
