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
        <template v-for="(w, index) in getWorks">
            <work-item :key="index"
            class="worksCard"
            :style="{backgroundImage: 'url(' + w.general.thumbnail + ')'}"
            :item="w" />
        </template>
    </section>
</div>
</template>

<script>
import tagItem from '../components/tagItem.vue'
import WorksItem from '../components//worksItem.vue'
import { mapGetters } from 'vuex'

export default {
  components: { tagItem, WorksItem },
    computed: {
        ...mapGetters({
            getWorks: 'json/getWorks',
        }),
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