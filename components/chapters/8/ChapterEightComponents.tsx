'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface URLProp {
  url: string;
}

// Type guard function
const isPostArray = (data: unknown): data is Post[] => {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as Post).id === 'number' &&
        typeof (item as Post).userId === 'number' &&
        typeof (item as Post).title === 'string' &&
        typeof (item as Post).body === 'string'
    )
  );
};

const fetchPosts = async (url: string): Promise<Post[]> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

  const blogPosts = await response.json();

  if (!isPostArray(blogPosts)) {
    throw new Error('Invalid response format');
  }

  return blogPosts;
};

// Blog Post Component
export const BlogPosts = ({ url }: URLProp) => {
  const [loadedPosts, setLoadedPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts(url);
        setLoadedPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    if (url) {
      loadPosts();
    }
    // fetchPosts(url).then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }, [url]);

  const handleFetchPost = async () => {
    try {
      const fetchedPosts = await fetchPosts(url);
      setLoadedPosts(fetchedPosts);
      // fetchPosts(url).then((fetchedPosts) => setLoadedPosts(fetchedPosts));
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div>
      <Button
        onClick={handleFetchPost}
        variant="destructive"
        className="hover:cursor-pointer"
      >
        Fetch Posts
      </Button>

      {error && <p className="text-red-500">{error}</p>}

      <ul>
        {loadedPosts.map((post) => (
          <li
            key={post.id}
            className="bg-blue-400 rounded-2xl text-black my-3 py-3"
          >
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Alert Component
export const Alert = () => {
  const [alertDone, setAlertDone] = useState(false);

  useEffect(() => {
    let timer;

    console.log('Starting Alert Timer!');
    timer = setTimeout(() => {
      console.log('Timer expired!');
      setAlertDone(true);
    }, 2000);

    return () => {
      console.log('Cleanup!');
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!alertDone && <p>Relax, you still got some time!</p>}
      {alertDone && <p>Time to get up!</p>}
    </>
  );
};
