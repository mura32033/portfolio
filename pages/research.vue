<template>
    <div id="docs">
        <Pagetitle>
            <template #title>Research</template>
            <template #desc>
                <p>研究に関する内容をまとめました。</p>
            </template>
        </Pagetitle>
        <nuxt-content :document="page" />
    </div>
</template>

<script>
export default {
    async asyncData ({ $content }) {
        const page = await $content('research').fetch()
        return {
            page
        }
    },
    name: 'Research',
    head() {
        return{
            title: 'Research'
        }
    }
}
</script>