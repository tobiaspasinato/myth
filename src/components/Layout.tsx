import { type ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
        {/* layout content */}
        {children}
        </div>
    );
};

export default Layout;