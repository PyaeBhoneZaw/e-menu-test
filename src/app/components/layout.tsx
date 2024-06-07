// components/Layout.tsx
import React, { ReactNode } from 'react';
import UpperNavBar from './UpperNavBar';
import LowerNavBar from './LowerNavBar';
import { CartProvider } from '../contexts/CartContext';
import Product from './Product';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <CartProvider>
                <UpperNavBar />
                <LowerNavBar />
                <main>{children}</main>
            </CartProvider>
        </div>
    );
};

export default Layout;
