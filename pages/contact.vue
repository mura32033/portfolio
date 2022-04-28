<template>
    <div id="contact">
        <Pagetitle>
            <template #title>Contact</template>
        </Pagetitle>
        <template v-for="d in data.contact">
            <template v-if="d != null">
                <Infodesc :data="d" :key="d.title" />
            </template>
        </template>
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