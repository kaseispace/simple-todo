import { Prisma } from '../../../prisma/generated/client'

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))

  if (Number.isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid ID',
      data: { message: 'IDが不正です' },
    })
  }

  try {
    await prisma.note.delete({
      where: { id },
    })
  }
  catch (err: unknown) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2025') {
        throw createError({
          statusCode: 404,
          statusMessage: 'Category Not Found',
          data: { message: '指定されたタスクは存在しません' },
        })
      }
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      data: { message: '予期しないエラーが発生しました' },
    })
  }
})
