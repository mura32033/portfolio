<template>
    <span class="tagItem" :class="tag.class">{{tag.name}}</span>
</template>

<script>
export default {
    props: ["tag"]
}
</script>

<style lang="scss">
.tagItem {
    border: 1px solid rgba(51, 51, 51, .4);
    border-radius: 999px;
    display: inline-block;
    flex-direction: row;
    padding: 1px 8px;
    margin-left: .5rem;
    min-width: 64px;
    text-align: center;
}
</style>