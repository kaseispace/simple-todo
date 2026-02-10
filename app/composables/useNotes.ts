import type { CreateNote } from '#schemas/index'

export const useNotes = () => {
  const createNote = async (input: CreateNote): Promise<CreateNote> => {
    try {
      return await $fetch<CreateNote>('/api/notes', {
        method: 'POST',
        body: input,
      })
    }
    catch (err: unknown) {
      const error = err as { data?: unknown }
      throw error.data || error
    }
  }

  return { createNote }
}
