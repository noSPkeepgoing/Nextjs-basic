import { API_URL } from '../../../(Home)/page';

async function getMovie(id: string) {
  const res = await fetch(`${API_URL}/${id}`);
  const json = res.json();
  return json;
}

async function getVideo(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);
  const json = res.json();
  return json;
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);
  return <h1>{movie.title}</h1>;
}
