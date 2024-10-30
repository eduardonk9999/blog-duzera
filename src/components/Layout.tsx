import { FC, ReactNode } from 'react';
import Header from "./Header";
import Footer from "./Footer/Footer";

interface LayoutProps {
    children: ReactNode;
}


const Layout: FC<LayoutProps> = ({ children }) => {
    return(
        <>
            <Header />
            <main>{children}</main>
            <Footer />
           
        </>
    )
}

export default Layout;