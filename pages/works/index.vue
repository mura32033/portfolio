<template>
<div id="works">
    <Pagetitle>
        <template #title>Works</template>
        <template #desc>
            <p>作ったものをご紹介します。</p>
            <p>カードをクリックすると詳細をご確認いただけます。</p>
        </template>
    </Pagetitle>
    <section class="worksItemsGroup">
        <template v-for="p in page">
            <work-item v-if="p.general.thumbnail" :key="p.slug"
            class="worksCard"
            :style="{backgroundImage: 'url(' + p.general.thumbnail + ')'}"
            :item="p" />
            <work-item v-else :key="p.slug"
            class="worksCard"
            :item="p" />
        </template>
    </section>
</div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const page = await $content('json/works').sortBy('createdAt', 'desc').fetch()
        return { page }
    },
    head() {
        return{
            title: "Works"
        }
    }
}
</script>

<style lang="scss" scoped>
.worksItemsGroup {
    @apply grid grid-cols-1 lg:grid-cols-3 gap-8 justify-between;
}
.worksCard {
    @apply flex flex-row bg-center bg-contain bg-no-repeat bg-[rgba(255,255,255,.9)] bg-blend-lighten dark:text-gray-900 rounded-lg h-full m-auto p-2 w-full hover:shadow-md;
}
</style>