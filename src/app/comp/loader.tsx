'use client'
import React, { useEffect, useState, ReactNode } from 'react';
import './loader.css';

type LoaderProps = {
    children?: ReactNode; // ✅ optional children
};

const Loader: React.FC<LoaderProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative">
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-md">
                    <div className="loader"></div>
                </div>
            )}
            {/* ✅ render children only if provided */}
            {children && (
                <div className={loading ? 'blur-sm pointer-events-none select-none' : ''}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Loader;
