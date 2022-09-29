<template>
    <div id="docs">
        <Pagetitle>
            <template #title>Docs</template>
            <template #desc>
                <p>備忘録などなど。気が向いたときに更新していきます。</p>
            </template>
        </Pagetitle>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DocsCard v-for="l in list" :key="l.slug" :title="l.title" :path="l.path" :date="formatDate(l.updatedAt)" />
        </div>
    </div>
</template>

<script>
const dayjs = require('dayjs')
export default {
    async asyncData ({ $content }) {
        const list = await $content('docs', { deep: true }).only(['title', 'slug', 'path', 'updatedAt']).where({ isPublished: true }).sortBy('updatedAt', 'desc').fetch()
        return {
            list
        }
    },
    name: 'Docs',
    head() {
        return{
            title: 'Docs'
        }
    },
    mounted() {
        dayjs.extend(require('dayjs/plugin/utc'))
        dayjs.extend(require('dayjs/plugin/timezone'))
        dayjs.tz.setDefault('Asia/Tokyo')
    },
    methods: {
        formatDate(date) {
            return dayjs(date).format('YYYY/MM/DD HH:mm:ss')
        }
    }
}
</script>