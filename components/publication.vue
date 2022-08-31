<template>
    <div class="card publicationCard">
        <div class="publicationTitle" v-if="!data.detail.isFirstAuthor">{{data.title}}</div>
        <div class="publicationTitle" v-else>{{data.title}} (筆頭著者)</div>
        <div class="publicationDetail">
            <span class="publicationDate">{{data.detail.date}}</span>
            <span class="publicationPlace">{{data.detail.publisher}}</span>
        </div>
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
.publicationCard {
    .publicationTitle {
        @apply text-2xl font-bold tracking-wider;
    }
    .publicationContent {
        @apply mt-2 my-auto;
    }
    .publicationDetail {
        @apply text-slate-500 text-sm text-right mt-4 ml-auto;
        span {
            @apply block;
        }
    }
}
</style>