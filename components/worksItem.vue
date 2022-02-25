<template>
    <div class="worksModalCont">
        <h3 class="worksTitle">{{works.general.title}}</h3>
            <div class="worksContent">
                <section v-for="(d, index) in works.desc" :key="index">
                    <h4 v-if="d.header != null">{{d.header}}</h4>
                    <p>{{d.content}}</p>
                </section>
            </div>
            <div class="tagGroup">
                Tag: <template v-for="(t, index) in works.general.tags"><tag-item :key="index" :tag="t" /></template>
            </div>
            <div class="imageGroup">
                <template v-if="works.img != null">
                    <carousel
                     :per-page="1"
                     :autoplay="true"
                     :autoplayTimeout="6000"
                     :autoplayHoverPause="true"
                     :loop="true">
                        <slide v-for="(i, index) in works.img" :key="index">
                            <img class="image-thumbnail" v-bind:src="i.src" v-bind:alt="i.alt">
                        </slide>
                    </carousel>
                </template>
                <template v-else>
                    <span>No image available.</span>
                </template>
            </div>
            <div class="linkGroup">
                <template v-if="works.link != null">
                    外部リンク: <a class="linkItem" v-for="(l, index) in works.link" :key="index" v-bind:href="l.url" target="_blank">{{l.text}}</a>
                </template>
                <template v-else>
                    <span>No link available.</span>
                </template>
            </div>
            <span>{{formatDate(works.createdOn)}}</span>
    </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import dayjs from 'dayjs'

export default {
    props: {
        works: Object
    },
    components: {
        Carousel,
        Slide
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
}
</script>

<style lang="scss">
.worksModalCont {
    height: 100%;
    overflow-y: scroll;
    padding: 15px;
}
.tagGroup {
    align-items: center;
    display: flex;
    flex-direction: row;
}
.linkItem {
    text-decoration: underline;
}
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
</style>