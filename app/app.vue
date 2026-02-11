<template>
  <UApp>
    <UHeader :toggle="false">
      <template #title>
        ToDo リスト
      </template>

      <template #right>
        <CreateCategoryModal />

        <UColorModeButton />
      </template>
    </UHeader>

    <NuxtPage class="pt-5 px-10" />
    <UFooter>
      変更した
    </UFooter>
  </UApp>
</template>
