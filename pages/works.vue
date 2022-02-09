<template>
<div id="works">
    <section>
        <h1>Works</h1>
        <p>作ったものをご紹介します。</p>
        <p>カードをクリックすると詳細をご確認いただけます。</p>
    </section>
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
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-content: space-between;
}
.worksCard {
    background: center / contain no-repeat;
    background-color: rgba(255, 255, 255, .9);
    background-blend-mode: lighten;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: auto;
    padding: 10px;
    width: 100%;
}
</style>