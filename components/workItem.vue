<template>
    <div @click="show(item.id)">
        <div class="cardContent">
            <div class="cardInfo">
                <h3>{{item.general.title}}</h3>
                <span v-for="(t, index) in item.general.tags" :key="index" :class="t.class">タグ: {{t.name}}</span>
            </div>
            <p>{{item.general.shortDesc}}</p>
        </div>
        <modal
            :name="item.id"
            :adaptive="true"
            :scrollable="true"
            width="50%"
            height=auto>
            <works-item :works="item" />
        </modal>
    </div>
</template>

<script>
import worksItem from './worksItem.vue'
export default {
  components: { worksItem },
    props: {
        item: Object
    },
    methods: {
        show(id) {
            this.$modal.show(id)
        },
        hide(id) {
            this.$modal.hide(id)
        }
    }
}
</script>

<style lang="scss">
.cardContent {
    @apply flex flex-col h-full w-full p-2 rounded-lg;
    .cardInfo {
        @apply pb-4;
        > span {
            @apply block text-sm text-right;
        }
    }
    > p {
        @apply mt-auto;
    }
}
</style>