import { getPosts } from '@/actions/posts';
import { NavBar } from '@/components/NavBar';
import { About } from '@/components/landing/About';
import { PostList } from '@/components/landing/PostList';
import { Pricing } from '@/components/landing/Pricing';

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <About />
        <Pricing />
        <PostList posts={posts} />
      </main>
    </>
  );
}
