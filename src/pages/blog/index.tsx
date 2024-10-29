
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer/Footer';


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
            <Header />
            <article className='container'>
                <h1>Blog</h1>
                <ul>
                    {posts?.map((post) =>(
                        <li key={post.id}>
                            <Link href={`/blog/${post.number}`}>
                                {post.title}
                            </Link>
                            <p>{post.body.slice(0, 100)}...</p>
                        </li>
                    ))}
                </ul>
            </article>

            <Footer />

        
        </>
    )
}

export default Blog;