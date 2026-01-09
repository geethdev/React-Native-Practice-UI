import { useEffect, useState, useRef, useCallback } from 'react';
import { fetchPosts } from '../api/postsService';

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const controller = useRef(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    controller.current?.abort();
    controller.current = new AbortController();
    try {
      const data = await fetchPosts(controller.current.signal);
      setPosts(data);
    } catch (err) {
      if (err.name !== 'AbortError') setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
    return () => controller.current?.abort();
  }, [load]);

  return { posts, loading, error, refresh: load };
}
