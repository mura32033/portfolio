<template>
    <article>
        <Pagetitle>
            <template #title>{{ page.title }}</template>
            <template #desc>
                <section class="text-left text-sm text-slate-500 flex flex-col">
                    <span>Created: {{ formatDate(page.createdAt) }}</span>
                    <span>Updated: {{ formatDate(page.updatedAt) }}</span>
                </section>
            </template>
        </Pagetitle>
        <section>
            <nuxt-content :document="page" />
        </section>
        <section>
            <nuxt-link to="/docs">←戻る</nuxt-link>
        </section>
    </article>
</template>

<script>
const dayjs = require('dayjs')
export default {
    async asyncData ({ $content, params }) {
        const page = await $content('docs', params.slug).fetch()
        return {
            page
        }
    },
    mounted() {
        dayjs.extend(require('dayjs/plugin/utc'))
        dayjs.extend(require('dayjs/plugin/timezone'))
        dayjs.tz.setDefault('Asia/Tokyo')
    },
    methods: {
        formatDate(date) {
            return dayjs(date).format('YYYY年MM月DD日 HH:mm:ss')
        }
    }
}
</script>