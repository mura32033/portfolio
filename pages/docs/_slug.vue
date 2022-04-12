<template>
    <article class="docsArticle" v-if="page.isPublished">
        <div class="flex flex-row items-center gap-4 mt-3">
            <nuxt-link to="/docs" class="flex flex-row items-center"><span class="material-icons">arrow_back_ios</span>記事一覧</nuxt-link>
            <span>/</span>
            <span>{{ page.slug }}</span>
        </div>
        <Pagetitle>
            <template #title>{{ page.title }}</template>
            <template #desc>
                <section class="text-left text-sm text-slate-500 flex flex-col">
                    <span class="flex flex-row items-center"><span class="material-icons ml-auto mr-2">schedule</span>{{ formatDate(page.updatedAt) }}</span>
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
    <article class="docsArticle" v-else>
        <div class="flex flex-row items-center gap-4 mt-3">
            <nuxt-link to="/docs" class="flex flex-row items-center"><span class="material-icons">arrow_back_ios</span>Docs</nuxt-link>
            <span>/</span>
            <span>???</span>
        </div>
        <Pagetitle>
            <template #title>存在しない記事です。</template>
            <template #desc>
                <section class="text-left text-sm text-slate-500 flex flex-row items-center gap-2">
                    <span class="mr-1">タグ:</span>
                    <span class="rounded-full border-2 py-1 px-2">???</span>
                </section>
                <section class="text-left text-sm text-slate-500 flex flex-col">
                    <span class="flex flex-row items-center"><span class="material-icons ml-auto mr-2">schedule</span>???</span>
                </section>
            </template>
        </Pagetitle>
        <section>
            <section>
                <p>ドーナツの穴は食べられません。</p>
            </section>
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
            return dayjs(date).format('YYYY/MM/DD HH:mm:ss')
        }
    },
    head() {
        let title = this.page.isPublished ? this.page.title : 'Not Found'
        return {
            title: `${title} | むらさん`,
            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: `${this.page.title} | むらさん`
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: `https://mura32033.com${this.page.path}`
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.docsArticle {
    a.nuxt-link-active {
        @apply hover:border-b-2 hover:border-b-teal-600;
    }
    .pagetitle h1 {
        @apply mt-8;
    }
    .nuxt-content {
        line-height: 2;
        p {
            @apply mb-4;
            &:last-child {
                @apply mb-0;
            }
        }
        a {
            text-decoration: underline;
        }
        h4 {
            @apply text-xl font-bold my-6;
        }
        ul {
            @apply my-8 ml-8 list-disc;
        }
        table {
            @apply table-auto w-full;
            th {
                @apply border-b-2 border-b-slate-400 px-4 py-2 text-gray-800 bg-slate-100;
            }
            td {
                @apply border-b border-b-slate-400 px-4 py-1;
            }
            tr:last-child {
                @apply border-b-2 border-b-slate-400;
            }
        }
    }
}
</style>
