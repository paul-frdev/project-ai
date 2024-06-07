import Link from 'next/link'
import React from 'react'
import { Card, CardDescription, CardTitle } from '../ui/card'
import parse from 'html-react-parser'
import { getMonthName } from '@/lib/utils'
import { IPost } from '@/types/posts'
import { Image } from '../ui/Image'


type PostProps = {
  post: IPost
}
export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Link
      href={`/blog/${post.id}`}
      key={post.id}
    >
      <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-gray-100">
        <div className="relative w-full aspect-video">
          <Image
            className="w-full h-[270px]"
            src={post.imageUrl}
            alt={post.publicId?.publicId!}
            isFill
          />
        </div>
        <div className="py-5 px-10 flex flex-col gap-5">
          <CardDescription>
            {getMonthName(post.createdAt.getMonth())}{' '}
            {post.createdAt.getDate()} {post.createdAt.getFullYear()}
          </CardDescription>
          <CardTitle>{post.title}</CardTitle>
          {parse(post.content.slice(4, 100))}...
        </div>
      </Card>
    </Link>
  )
}
