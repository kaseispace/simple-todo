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

export const createCategorySchema = z.object({
  title: z.string().min(1, 'カテゴリ名を入力してください').max(50, '50文字以内で入力してください'),
})

export type CreateCategory = z.infer<typeof createCategorySchema>

export const createNoteSchema = z.object({
  content: z.string().min(1, '内容を入力してください'),
  categoryId: z.number().nullable(),
})

export type CreateNote = z.infer<typeof createNoteSchema>

/* =========
   Errors
========= */

export const ApiErrorSchema = z.object({
  statusCode: z.number(),
  statusMessage: z.string(),
  data: z.any().optional(),
  message: z.string().optional(),
})

export type ApiError = z.infer<typeof ApiErrorSchema>
