import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const count = await prisma.note.count();
  if (count > 0) { console.log('Database already seeded, skipping.'); return; }

  await prisma.note.createMany({
    data: [
      { title: 'Welcome', content: 'This is a sample note to get you started.', completed: false },
      { title: 'Shopping list', content: 'Milk, eggs, bread, butter', completed: false },
      { title: 'Learn React', content: 'Build a blog app with Next.js and Express', completed: true },
    ],
  });

  console.log('Seeded 3 notes.');
};

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
