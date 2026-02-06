import type { PrismaClient } from '../generated/client'

export async function seedCategories(prisma: PrismaClient) {
  const categories = [
    { title: '家事' },
    { title: '買い物' },
    { title: '学習' },
    { title: '趣味' },
  ]

  const createdCategories = []

  for (const t of categories) {
    const category = await prisma.category.upsert({
      where: { title: t.title },
      update: {},
      create: t,
    })
    createdCategories.push(category)
  }

  return createdCategories
}
