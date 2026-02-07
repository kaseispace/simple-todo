<script setup lang="ts">
import { createCategorySchema, ApiErrorSchema } from '#schemas/index'
import type { CreateCategory } from '#schemas/index'
import type { FormSubmitEvent } from '@nuxt/ui'

const { createCategory } = useCategoryList()
const toast = useToast()

const state = reactive<CreateCategory>({
  title: '',
})

const onSubmit = async (event: FormSubmitEvent<CreateCategory>) => {
  try {
    await createCategory(event.data)

    toast.add({
      title: 'Success',
      description: 'カテゴリを追加しました',
      color: 'success',
      progress: false,
      ui: {
        title: 'text-green-400',
        description: 'text-gray-900 dark:text-white',
      },
      duration: 2000,
    })

    state.title = ''

    // setTimeout(async () => {
    //   await refreshUsers()
    // }, 5000)
  }
  catch (err) {
    const parsed = ApiErrorSchema.safeParse(err)

    if (parsed.success) {
      const apiErr = parsed.data

      toast.add({
        title: 'Error',
        description: apiErr.data.message || 'カテゴリの追加に失敗しました',
        color: 'warning',
        progress: false,
        ui: {
          title: 'text-red-400',
          description: 'text-gray-900 dark:text-white',
        },
      })
    }
    else {
      toast.add({
        title: 'Error',
        description: '予期しないエラーが発生しました',
        color: 'error',
        progress: false,
        ui: {
          title: 'text-red-400',
          description: 'text-gray-900 dark:text-white',
        },
      })
    }
  }
}
</script>

<template>
  <UModal
    title="新しいカテゴリを作成"
    description="カテゴリ名を入力してください。"
  >
    <UButton
      icon="i-lucide-pen"
      label="カテゴリを追加"
      color="secondary"
      variant="subtle"
    />

    <template #body>
      <UForm
        :schema="createCategorySchema"
        :state="state"
        @submit="onSubmit"
      >
        <UFormField
          label="カテゴリ名"
          name="title"
        >
          <UInput
            v-model="state.title"
            class="w-full"
            color="neutral"
          />
        </UFormField>

        <div class="flex justify-end mt-3">
          <UButton
            type="submit"
            color="secondary"
          >
            作成
          </UButton>
        </div>
      </UForm>
    </template>
  </UModal>
</template>
