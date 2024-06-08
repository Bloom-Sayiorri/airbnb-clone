'use client';

import React from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface LogoProps {
    src: string;
    alt: string;
    className?: string;
    height: number;
    width: number;
};

const Logo: React.FC<LogoProps> = ({src, alt, className, height, width}) => {
    const router = useRouter;
    return (
        <Image 
            src={src}
            alt={alt}
            className={className} 
            height={height}
            width={width}
        />
    );
};

export default Logo;