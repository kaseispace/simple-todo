import type { CategoryWithNotes, CreateCategory } from '#schemas/index'

export const useCategoryList = () => {
  const { data: categoryList, pending, error, refresh } = useFetch<CategoryWithNotes[]>('/api/categories')

  const createCategory = async (input: CreateCategory): Promise<CreateCategory> => {
    try {
      return await $fetch('/api/categories', {
        method: 'POST',
        body: input,
      })
    }
    catch (err: unknown) {
      const error = err as { data?: unknown }
      throw error.data || error
    }
  }

  const deleteCategory = async (id: number) => {
    try {
      return await $fetch(`/api/categories/${id}`, {
        method: 'DELETE',
      })
    }
    catch (err: unknown) {
      const error = err as { data?: unknown }
      throw error.data || error
    }
  }

  return { categoryList, pending, error, refresh, createCategory, deleteCategory }
}
