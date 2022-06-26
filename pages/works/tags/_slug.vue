<template>
<div id="works">
    <div class="flex flex-row items-center gap-4 mt-3">
        <nuxt-link to="/works" class="flex flex-row items-center"><span class="material-icons">arrow_back_ios</span>Works</nuxt-link>
        <span>/</span>
        <span>{{ $route.params.slug }}</span>
    </div>
    <Pagetitle>
        <template #title>{{ $route.params.slug }}のWorks</template>
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
    async asyncData({ $content, params }) {
        const page = await $content('json/works').where({ 'general.tags.name': { $contains: params.slug } }).sortBy('createdAt', 'desc').fetch()
        
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
    @apply flex flex-row bg-center bg-contain bg-no-repeat bg-[rgba(255,255,255,.9)] bg-blend-lighten rounded-lg h-full m-auto p-2 w-full hover:shadow-md;
}
</style>