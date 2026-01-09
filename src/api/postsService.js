const BASE = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts(signal) {
  const res = await fetch(`${BASE}/posts`, { signal });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch posts: ${res.status} ${text}`);
  }
  return res.json();
}

export default { fetchPosts };
