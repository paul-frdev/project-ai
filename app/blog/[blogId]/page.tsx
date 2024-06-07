import { getPostById } from '@/actions/posts'
import { Image } from '@/components/ui/Image'
import { CardDescription } from '@/components/ui/card'
import { getMonthName } from '@/lib/utils'
import { IPost } from '@/types/posts'
import parse from 'html-react-parser'
import React from 'react'

type Props = { params: { blogId: string } }

const PostPage = async ({ params }: Props) => {
  const post: IPost | null | undefined = await getPostById(params.blogId);

  return (
    <div className="container flex justify-center my-10">
      <div className="lg:w-6/12 flex flex-col">
        <Image src={post!.imageUrl} alt={post!.publicId?.publicId} className='w-full my-6' />
        <CardDescription>
          {getMonthName(post?.createdAt.getMonth()!)}{' '}
          {post?.createdAt.getDate()} {post?.createdAt.getFullYear()}
        </CardDescription>
        <h2 className="text-6xl font-bold">{post?.title}</h2>
        <div className="text-xl parsed-container flex flex-col mt-10 gap-10">
          {parse(post!.content)}
        </div>
      </div>
    </div>
  )
}

export default PostPage