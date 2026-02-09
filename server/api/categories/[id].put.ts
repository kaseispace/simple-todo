import { Prisma } from '../../../prisma/generated/client'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))

  if (Number.isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid ID',
      data: { message: 'IDが不正です' },
    })
  }

  const body = await readBody(event)

  try {
    const updated = await prisma.category.update({
      where: { id },
      data: {
        title: body.title,
      },
    })

    return updated
  }
  catch (err: unknown) {
    if (err instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation Error',
        data: z.treeifyError(err),
      })
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        throw createError({
          statusCode: 409,
          statusMessage: 'Category already exists',
          data: { message: '同じ名前のカテゴリがすでに存在します' },
        })
      }
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2025') {
        throw createError({
          statusCode: 404,
          statusMessage: 'Category Not Found',
          data: { message: '指定されたカテゴリは存在しません' },
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
