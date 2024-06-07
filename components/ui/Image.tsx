import { cn } from '@/lib/utils';
import BaseImage from 'next/image';
import React from 'react';

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  isFill?: boolean
};
export const Image: React.FC<ImageProps> = ({ src, alt = '', width = 0, height = 0, sizes = '100vw', className, isFill = false }) => {
  return <BaseImage src={src} alt={alt} width={width} height={height} sizes={sizes} fill={isFill} className={cn(`w-full h-auto`, className)} />;
}; 