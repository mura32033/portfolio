<template>
    <div class="infoDesc">
        <dt>{{data.title}}</dt>
        <dd>{{data.content}} <template v-if="data.place">@{{data.place}}</template></dd>
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
    @apply flex flex-row mb-2 last:mb-0;
    dt, dd {
        @apply py-2 px-4 rounded;
    }
    dt {
        @apply bg-teal-600 text-white;
    }
}
</style>