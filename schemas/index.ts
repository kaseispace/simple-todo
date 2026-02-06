import { z } from 'zod'

/* =========
   Models
========= */

export const CategorySchema = z.object({
  id: z.number(),
  title: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Category = z.infer<typeof CategorySchema>

export const NoteSchema = z.object({
  id: z.number(),
  category_id: z.number(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Note = z.infer<typeof NoteSchema>

export const CategoryWithNotesSchema = CategorySchema.extend({
  notes: z.array(NoteSchema),
})

export type CategoryWithNotes = z.infer<typeof CategoryWithNotesSchema>

/* =========
   Inputs
========= */

export const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
})

export type CreateUser = z.input<typeof createUserSchema>
export type CreateUserOutput = z.output<typeof createUserSchema>

/* =========
   Errors
========= */

export const ApiErrorSchema = z.object({
  statusCode: z.number(),
  data: z
    .object({
      message: z.string(),
    }),
})

export type ApiError = z.infer<typeof ApiErrorSchema>
