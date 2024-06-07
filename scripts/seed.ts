import prisma from '../lib/prisma';
import postData from './posts.json';

async function main() {
  const posts = await prisma.$transaction(
    postData.map((post) =>
      prisma.post.create({
        data: {
          title: post.title,
          content: post.content,
          publicId: {
            create: {
              publicId: post.publicId,
            },
          },
        },
      })
    )
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
