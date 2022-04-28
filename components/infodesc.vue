<template>
    <div class="infoDesc">
        <dt>{{data.title}}</dt>
        <dd v-if="data.content.rel"><a :rel="data.content.rel" :href="data.content.url" target="_blank">{{data.content.url}}</a></dd>
        <dd v-else-if="data.content.type == 'link'"><a :href="data.content.url" target="_blank">{{data.content.url}}</a></dd>
        <dd v-if="data.content.type != 'link'">{{data.content}} <template v-if="data.place">@{{data.place}}</template></dd>
    </div>
</template>

<script>
export default {
    props: {
        data: Object
    }
}
</script>

<style lang="scss">
.infoDesc {
    @apply flex flex-row items-center mb-2 last:mb-0;
    dt, dd {
        @apply rounded;
    }
    dt {
        @apply py-2 px-4 bg-teal-600 text-white;
        word-break: keep-all;
    }
    dd {
        @apply ml-4
    }
}
</style>