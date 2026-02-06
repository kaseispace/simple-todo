import type { CategoryWithNotes } from '#schemas/index'

export const useCategoryList = () => {
  const { data: categoryList, pending, error, refresh } = useFetch<CategoryWithNotes[]>('/api/categories')

  return { categoryList, pending, error, refresh }
}
