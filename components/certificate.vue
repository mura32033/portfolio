<template>
    <div class="card certificateCard">
        <div class="certificateTitle">{{data.title}}</div>
        <div class="certificateContent">{{data.content}}</div>
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
.certificateCard {
    .certificateTitle {
        @apply text-2xl font-bold tracking-wider;
    }
    .certificateContent {
        @apply mt-2 my-auto;
    }
}
</style>