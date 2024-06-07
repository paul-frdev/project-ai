'use server';
import prisma from '@/lib/prisma';
import { unstable_noStore as noStore } from 'next/cache';
import cloudinary from '../lib/config';

export const getPosts = async () => {
  noStore();
  try {
    const posts = await prisma.post.findMany({
      take: 6,
      select: {
        id: true,
        title: true,
        content: true,
        publicId: {
          select: {
            publicId: true,
            id: false,
            postId: false,
          },
        },
        createdAt: true,
        updatedAt: false,
      },
    });

    const postsWithImages = posts.map((post) => ({
      ...post,
      imageUrl: cloudinary.url(post.publicId?.publicId as any, {
        crop: 'scale',
      }),
    }));
    
    return postsWithImages;
  } catch (error) {
    console.log(error);
  }
};
