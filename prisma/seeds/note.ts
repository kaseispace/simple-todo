import type { PrismaClient, Category } from '../generated/client'

export async function seedNotes(prisma: PrismaClient, categories: Category[]) {
  const notes = [
    { categoryTitle: '家事', content: '洗濯物を畳む' },
    { categoryTitle: '買い物', content: '牛乳' },
    { categoryTitle: '学習', content: 'TypeScriptの勉強' },

  ]

  const createdNotes = []

  for (const n of notes) {
    const category = categories.find(c => c.title === n.categoryTitle)
    if (!category) continue

    const note = await prisma.note.upsert({
      where: { id: category.id * 1000 },
      update: {},
      create: {
        id: category.id * 1000,
        content: n.content,
        categoryId: category.id,
      },
    })

    createdNotes.push(note)
  }

  return createdNotes
}
