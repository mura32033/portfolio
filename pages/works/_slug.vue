<template>
    <article class="docsArticle">
        <div class="flex flex-row items-center gap-4 mt-3">
            <nuxt-link to="/works" class="flex flex-row items-center"><span class="material-icons">arrow_back_ios</span>Works</nuxt-link>
            <span>/</span>
            <span>{{ page.slug }}</span>
        </div>
        <Pagetitle>
            <template #title>{{ page.general.title }}</template>
            <template #desc>
                <section class="text-left text-sm text-slate-500 flex flex-row items-center gap-2">
                    <span class="mr-1">タグ:</span>
                    <span class="rounded-full border-2 py-1 px-2" v-for="(t, index) in page.general.tags" :key="'tag' + index" :class="t.class">{{ t.name }}</span>
                </section>
                <section class="text-left text-sm text-slate-500 flex flex-col">
                    <span class="flex flex-row items-center"><span class="material-icons ml-auto mr-2">schedule</span>{{ formatDate(page.createdAt) }}</span>
                    <span class="flex flex-row items-center mt-2"><span class="material-icons ml-auto mr-2">update</span>{{ formatDate(page.updatedAt) }}</span>
                </section>
            </template>
        </Pagetitle>
        <section>
            <section v-for="(d, index) in page.desc" :key="'desc' + index">
                <h2 v-if="d.header">{{ d.header }}</h2>
                <p>{{ d.content }}</p>
            </section>
            <div class="imageGroup" v-if="page.img">
                <carousel
                     :per-page="1"
                     :autoplay="true"
                     :autoplayTimeout="6000"
                     :autoplayHoverPause="true"
                     :loop="true">
                        <slide v-for="(i, index) in page.img" :key="'img' + index">
                            <img class="image-thumbnail" :src="i.src" :alt="i.alt">
                        </slide>
                    </carousel>
            </div>
            <section class="flex flex-row items-center gap-8" v-if="page.link">
                <span class="-mr-6 self-start">関連リンク:</span>
                <div class="flex flex-col">
                    <a v-for="(l, index) in page.link" :key="'link' + index" class="linkItem" :href="l.url"><span v-if="l.type == 'link'" class="material-icons">link</span>{{l.text}}</a>
                </div>
            </section>
        </section>
        <section>
            <nuxt-link to="/works">←戻る</nuxt-link>
        </section>
    </article>
</template>

<script>
const dayjs = require('dayjs')
export default {
    async asyncData ({ $content, params }) {
        const page = await $content('json/works', params.slug).fetch()
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
        return {
            title: `${this.page.general.title} - Works | むらさん`,
            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: `${this.page.general.title} - Works | むらさん`
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
    a.linkItem {
        @apply flex flex-row items-center gap-2;
    }
    .pagetitle h1 {
        @apply mt-8;
    }
    .nuxt-content {
        line-height: 2;
        a {
            text-decoration: underline;
        }
        h4 {
            @apply text-xl font-bold my-6;
        }
    }
    .linkItem {
        text-decoration: underline;
    }
    .VueCarousel{
        @apply shadow;
        .VueCarousel-wrapper {
            height: 500px;
            .VueCarousel-inner {
                height: 100%!important;
                img {
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
        .VueCarousel-slide {
            @apply flex items-center justify-center;
        }
    }
}
</style>