<template>
    <div id="about">
        <h2>紹介</h2>
        <div class="infoDesc" v-for="(i, index) in getAbout.info" :key="index">
            <dt>{{i.title}}</dt>
            <dd>{{i.content}}</dd>
        </div>
        <h3>資格</h3>
        <div class="infoDesc" v-for="(c, index) in getAbout.skill.certificate" :key="index">
            <dt>{{c.title}}</dt>
            <dd>{{c.content}}</dd>
        </div>
        <h3>スキル</h3>
        <div class="infoDesc" v-for="(s, index) in getAbout.skill.skill" :key="index">
            <dt>{{s.title}}</dt>
            <dd>{{s.content}}</dd>
        </div>
        <h3>生い立ち</h3>
        <div class="infoDesc" v-for="(h, index) in getAbout.history" :key="index">
            <dt>{{h.title}}</dt>
            <dd>{{h.content}}</dd>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            getAbout: 'json/getAbout',
        }),
    }
}
</script>

<style lang="scss">
.infoDesc {
    display: flex;
    flex-direction: row;
    > dt {
        width: max-content;
    }
}
</style>
