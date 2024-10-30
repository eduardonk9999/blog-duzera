// Componente Blog.tsx

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LayoutBlogListen } from '@/styles/LayoutBlogListen';
import { Post } from '@/types/Post'; 

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error('Erro ao buscar posts.');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
       
        if (err instanceof Error) {
          setError(err.message); 
        } else {
          setError('Erro desconhecido'); 
        }
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <LayoutBlogListen className='container'>
        {error ? ( 
          <p>Erro: {error}</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link href={`/blog/${post.id}`}>
                  <h2>{post.title}</h2>
                </Link>
                <p>{post.body.slice(0, 150)}... <span>ler mais</span></p>
              </li>
            ))}
          </ul>
        )}
      </LayoutBlogListen>
    </>
  );
};

export default Blog;
