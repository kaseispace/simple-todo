<script setup lang="ts">
const { categoryList } = useCategoryList()
</script>

<template>
  <UPageGrid>
    <UCard
      v-for="category in categoryList"
      :key="category.id"
    >
      <h3 class="text-lg font-semibold flex items-center justify-center gap-1">
        <UIcon
          name="i-lucide-tag"
          class="size-5 bg-gray-500"
        />
        {{ category.title }}
      </h3>

      <ul v-if="category.notes.length > 0">
        <li
          v-for="note in category.notes"
          :key="note.id"
          class="flex items-center gap-2 border-b pb-1"
        >
          <span>□ {{ note.content }}</span>
        </li>
      </ul>

      <p v-else>
        タスクはありません
      </p>
    </UCard>
  </UPageGrid>
</template>
