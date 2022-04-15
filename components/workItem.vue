<template>
    <nuxt-link :to="'/works/' + item.slug">
        <div class="cardContent">
            <div class="cardInfo">
                <h3>{{item.general.title}}</h3>
                <span v-for="(t, index) in item.general.tags" :key="index" :class="t.class">タグ: {{t.name}}</span>
            </div>
            <p>{{item.general.shortDesc}}</p>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style lang="scss">
.vm--modal {
    @apply w-full left-0 md:w-20;
}
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