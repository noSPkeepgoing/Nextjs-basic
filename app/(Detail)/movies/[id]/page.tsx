import { Suspense } from 'react';
import { API_URL } from '../../../(Home)/page';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Movie Detail🎥</h1>
      <Suspense fallback={<h3>Loading movie info...</h3>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h3>Loading movie videos...</h3>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
