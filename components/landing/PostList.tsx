import { IPost } from '@/types/posts'
import React from 'react'
import { Post } from './Post'

type PostListProps = {
  posts?: IPost[]
}
export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <section className='md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8'>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  )
}
