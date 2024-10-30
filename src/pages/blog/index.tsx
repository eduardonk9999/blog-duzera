
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LayoutBlogListen } from '@/styles/LayoutBlogListen';


interface Post {
    id: number;
    title: string;
    body: string;
    number: number; 
  }


const Blog: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts');
            const data = await response.json();
            setPosts(data);
        };
    
        fetchPosts();


    }, []);

    return(
        <>
            <LayoutBlogListen className='container'>
                <ul>
                    {posts?.map((post) =>(
                        <li key={post.id}>
                            <Link href={`/blog/${post.number}`}>
                                <h2>{post.title}</h2>
                            </Link>
                            <p>{post.body.slice(0, 150)}... <span>ler mais</span></p>
                        </li>
                    ))}
                </ul>
            </LayoutBlogListen>
        </>
    )
}

export default Blog;