<script setup lang="ts">
const { categoryList } = useCategoryList()
</script>

<template>
  <UPageGrid>
    <UCard v-for="category in categoryList" :key="category.id">
      <div class="relative flex items-center justify-center">
        <h3 class="text-lg font-semibold flex items-center gap-1">
          <UIcon name="i-lucide-tag" class="size-5 text-blue-500 dark:text-blue-300" />
          {{ category.title }}
        </h3>

        <div class="absolute right-0">
          <CategoryActionsMenu :id="category.id" :title="category.title" />
        </div>
      </div>

      <ul v-if="category.notes.length > 0">
        <li
          v-for="note in category.notes"
          :key="note.id"
          class="flex items-center gap-2 border-b border-gray-300 dark:border-gray-700 pb-1"
        >
          <span class="text-gray-800 dark:text-gray-200">
            □ {{ note.content }}
          </span>
        </li>
      </ul>

      <p v-else>
        タスクはありません
      </p>
    </UCard>
  </UPageGrid>
</template>
