<template>
  <nuxt-link
    :to="path"
    class="
      flex flex-col
      justify-center
      overflow-hidden
      border border-gray-300
      dark:border-gray-700
      rounded-lg
      hover:border-gray-700
      dark:hover:border-gray-300
      hover:shadow-lg
      dark:hover:bg-gray-800
    "
  >
    <div class="p-8">
      <div class="text-2xl font-medium">{{ title }}</div>
      <p class="mt-2 text-sm text-gray-400">最終更新日時: {{ date }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>
