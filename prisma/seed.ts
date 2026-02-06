import 'dotenv/config'
import { PrismaClient } from './generated/client'
import { PrismaPg } from '@prisma/adapter-pg'

import { seedCategories } from './seeds/category'
import { seedNotes } from './seeds/note'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  const categories = await seedCategories(prisma)
  await seedNotes(prisma, categories)
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
