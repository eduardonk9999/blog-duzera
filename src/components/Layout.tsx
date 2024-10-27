import Link from "next/link"
import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode; 
}

const Layout: FC = ({ children }) => {
    return(
        <>
            <nav>
                <Link href="/">Home</Link> | <Link href="/blog">Blog</Link>
            </nav>
            <main>{children}</main>
            <footer>© 2024 Meu Blog</footer>
        </>
    )
}

export default Layout;