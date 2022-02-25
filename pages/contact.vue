<template>
    <div id="contact">
        <Pagetitle>
            <template #title>Contact</template>
            <template #desc><p>In preparation...</p></template>
        </Pagetitle>
        <Infodesc :data="data.github" />
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const data = await $content('json/contact').fetch()
        return { data }
    },
    name: 'Contact',
    head() {
        return{
            title: "Contact"
        }
    }
}
</script>