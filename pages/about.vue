<template>
    <div id="about">
        <section>
           <h1>About</h1>
            <div class="infoDesc" v-for="(i, index) in getAbout.info" :key="index">
                <dt>{{i.title}}</dt>
                <dd>{{i.content}}</dd>
            </div> 
        </section>
        <section>
            <h2>資格</h2>
            <div class="certificateDesc" v-for="(c, index) in getAbout.skill.certificate" :key="index">
                <dt>{{c.title}}</dt>
                <dd>{{c.content}}</dd>
            </div>
        </section>
        <section>
            <h2>スキル</h2>
            <div class="skillDesc" v-for="(s, index) in getAbout.skill.skill" :key="index">
                <dt>{{s.title}}</dt>
                <dd>{{s.content}}</dd>
            </div>
        </section>
        <section>
            <h2>受賞歴</h2>
            <div class="skillDesc" v-for="(a, index) in getAbout.award" :key="index">
                <dt>{{a.title}}</dt>
                <dd>{{a.content}} @{{a.place}}</dd>
            </div>
        </section>
        <section>
            <h2>生い立ち</h2>
            <div class="historyDesc" v-for="(h, index) in getAbout.history" :key="index">
                <dt>{{h.title}}</dt>
                <dd>{{h.content}}</dd>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            getAbout: 'json/getAbout',
        }),
    },
    head() {
        return{
            title: "About"
        }
    }
}
</script>

<style lang="scss">
@mixin desc {
    display: flex;
    flex-direction: row;
    margin-bottom: .5rem;
    &:last-child{
        margin-bottom: 0;
    }
    dt, dd {
        padding: .5rem 1rem;
    }
    dt {
        background-color: #333;
        color: white;
    }
}
.infoDesc {
    @include desc;
    
}
.skillDesc {
    @include desc;
}
.certificateDesc {
    @include desc;
}
.historyDesc {
    @include desc;
}
</style>
