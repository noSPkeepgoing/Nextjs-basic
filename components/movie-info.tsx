import { API_URL } from '../app/(Home)/page';

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`${API_URL}/${id}`);
  const json = res.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h4>{JSON.stringify(movie)}</h4>;
}
