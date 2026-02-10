import { createNoteSchema } from '#schemas/index'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const input = createNoteSchema.parse(body)
    await prisma.note.create({ data: input })
  }
  catch (err: unknown) {
    if (err instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation Error',
        data: { message: '入力内容に誤りがあります' },
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      data: { message: '予期しないエラーが発生しました' },
    })
  }
})
