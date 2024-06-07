'use server';
import prisma from '@/lib/prisma';
import { unstable_noStore as noStore } from 'next/cache';
import cloudinary from '../lib/config';
import { IPost } from '@/types/posts';

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

export const getPostById = async (id: string) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        publicId: true,
      },
    });

    if (!post) return null;

    const formattedPost: IPost = {
      ...post,
      imageUrl: cloudinary.url(post?.publicId?.publicId as any, {
        crop: 'scale',
      }),
    };

    return formattedPost;
  } catch (error) {
    console.log(error);
  }
};
