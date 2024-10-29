import Link from "next/link"
import { FC, ReactNode } from 'react';
import Header from "./Header";
import Home from "@/pages";

interface LayoutProps {
    children: ReactNode;
}



const Layout: FC<LayoutProps> = ({ children }) => {
    return(
        <>
            <main>{children}</main>
           
        </>
    )
}

export default Layout;