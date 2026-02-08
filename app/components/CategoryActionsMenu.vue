<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[][] = [
  [
    {
      label: '編集',
      icon: 'i-lucide-edit',
    },
    {
      label: '削除',
      color: 'error',
      icon: 'i-lucide-trash',
    },
  ],
]
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{
      align: 'end',
      side: 'bottom',
    }"
    :ui="{ content: 'w-auto min-w-0' }"
  >
    <UButton
      class="rounded-full"
      color="neutral"
      variant="ghost"
      icon="i-lucide-ellipsis-vertical"
    />
  </UDropdownMenu>
</template>
