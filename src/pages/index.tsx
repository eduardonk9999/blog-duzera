
import Link from "next/link";

import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <h1>Blog Duzera</h1>
      <p>Primeiro teste do blog</p>
      <Link href="/blog">Blog</Link>
    </>
  );
}

export default Home;