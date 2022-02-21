<template>
<div class="card skillCard">
    <div class="skillTitle">{{data.title}}</div>
    <div class="skillValue">
        <svg class="skillRing" :height="size * 2" :width="size * 2">
            <circle
                class="outerRing"
                stroke="white"
                fill="transparent"
                :stroke-width="stroke"
                :r="radius"
                :cx="size"
                :cy="size"
            />
            <circle
                class="ring"
                stroke="white"
                fill="transparent"
                :stroke-width="stroke"
                :r="radius"
                :cx="size"
                :cy="size"
                :stroke-dasharray="cf + ' ' + cf"
                :stroke-dashoffset="strokeDashoffset"
            />
            <!-- r = (width / 2) - (stroke-width * 2) -->
        </svg>
        <span class="absolute text-2xl text-teal-900 font-mono font-bold">{{data.level}}</span>
    </div>
    <div class="skillContent">{{data.content}}</div>
</div>
</template>

<script>
export default {
    props: {
        data: Object
    },
    data() {
        const size = 60;
        const stroke = 4;
        const radius = size - stroke * 2;
        const cf = radius * 2 * Math.PI;
        return {
            size,
            radius,
            cf,
            stroke,
            skill: this.$props.data.level,
            maxSkill: 5
        }
    },
    computed: {
        strokeDashoffset() {
            return this.cf - (((100 / this.maxSkill) * this.skill) / 100 * this.cf)
        }
    }
}
</script>

<style lang="scss">
.skillCard {
    .skillTitle {
        @apply text-2xl font-bold font-mono tracking-wider;
    }
    .skillValue {
        @apply inline-flex items-center justify-center overflow-hidden rounded-full;
    }
    .skillContent {
        @apply my-auto;
    }
}
.outerRing {
    @apply stroke-slate-200;
}
.ring{
    @apply stroke-teal-600;
    transition: stroke-dashoffset .5s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
}
</style>