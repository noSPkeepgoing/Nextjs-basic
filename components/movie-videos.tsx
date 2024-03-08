import { API_URL } from '../app/(Home)/page';

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}/videos`);
  const json = res.json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h4>{JSON.stringify(videos)}</h4>;
}
