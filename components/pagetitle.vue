<template>
    <section class="pagetitle">
        <h1><slot name="title" /></h1>
        <div class="pageDesc" v-if="slotted">
            <slot name="desc" />
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        slotted() {
            return !!this.$slots.desc
        }
    }
}
</script>

<style lang="scss">
.pagetitle {
    @apply flex flex-col justify-center mt-12;
    h1 {
        @apply mb-8;
    }
}
</style>