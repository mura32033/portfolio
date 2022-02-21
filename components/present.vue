<template>
    <div class="card awardCard">
        <div class="awardTitle">{{data.title}}</div>
        <div class="awardDetail">
            <span class="awardDate">{{data.detail.date}}</span>
            <span class="awardPlace">{{data.detail.place}}</span>
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
.awardCard {
    .awardTitle {
        @apply text-2xl font-bold tracking-wider;
    }
    .awardContent {
        @apply mt-2 my-auto;
    }
    .awardDetail {
        @apply text-slate-500 text-sm text-right mt-4 ml-auto;
        span {
            @apply block;
        }
    }
}
</style>