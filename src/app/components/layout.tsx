// components/Layout.tsx
import React, { ReactNode } from 'react';
import UpperNavBar from './UpperNavBar';
import LowerNavBar from './LowerNavBar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <UpperNavBar />
            <LowerNavBar />
            <main>{children}</main>

        </div>
    );
};

export default Layout;