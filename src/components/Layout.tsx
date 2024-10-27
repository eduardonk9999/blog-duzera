import Link from "next/link"
import { FC, ReactNode } from 'react';
import Header from "./Header";
import Home from "@/pages";

interface LayoutProps {
  children: ReactNode; 
}

const Layout: FC = () => {
    return(
        <>
            <Home />
           
        </>
    )
}

export default Layout;