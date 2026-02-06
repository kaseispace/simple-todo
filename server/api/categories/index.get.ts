export default defineEventHandler(async () => {
  return prisma.category.findMany({
    include: { notes: true },
  })
})
