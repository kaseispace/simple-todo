export default defineEventHandler(async () => {
  return prisma.category.findMany({
    include: {
      notes: {
        orderBy: { createdAt: 'asc' },
      },
    },
    orderBy: { createdAt: 'asc' },
  })
})
