// pages/blog/[id].tsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Content } from '@/styles/Content';
import { posts } from '../api/data'; // Importando os posts do data.ts

const PostPage: React.FC = () => {
  const [post, setPost] = useState<{ id: number; title: string; body: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPost = () => {
      if (!id) return;

      const postId = parseInt(id as string, 10);
      const foundPost = posts.find(post => post.id === postId);

      if (foundPost) {
        setPost(foundPost);
      } else {
        setPost(null); // Se não encontrar o post, setamos como null
      }

      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (!post) return <p style={{ textAlign: 'center' }}>Post não encontrado.</p>;

  return (
    <>
      <Content>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </Content>
    </>
  );
};

export default PostPage;
