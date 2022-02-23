<template>
    <div id="contact">
        <Pagetitle>
            <template #title>Docs</template>
            <template #desc>
                <p>備忘録などなど。気が向いたときに更新していきます。</p>
            </template>
        </Pagetitle>
        <ul>
            <li v-for="l in list" :key="l.slug">
                <nuxt-link :to="l.path">
                    {{ l.title }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    async asyncData ({ $content }) {
        const list = await $content({ deep: true }).only(['title', 'slug']).sortBy('createdAt', 'desc').fetch()
        return {
            list
        }
    },
    name: 'Docs',
    head() {
        return{
            title: 'Docs'
        }
    }
}
</script>