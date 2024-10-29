// pages/blog/[id].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Post {
  id: number;
  title: string;
  body: string;
  number: number; 
}

const PostPage: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      try {
        const response = await fetch(`https://api.github.com/repos/eduardonk9999/content_blog/issues/${id}`);
        
      
        if (!response.ok) {
          throw new Error('Erro ao buscar o post');
        }

        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Erro ao buscar o post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post não encontrado.</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export default PostPage;
