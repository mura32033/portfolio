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
                    <img class="image-thumbnail" v-for="(i, index) in works.img" :key="index" v-bind:src="i.src" v-bind:alt="i.alt">
                </template>
                <template v-else>
                    <span>No image available.</span>
                </template>
            </div>
            <div class="linkGroup">
                <template v-if="works.link != null">
                    <a class="linkItem" v-for="(l, index) in works.link" :key="index" v-bind:href="l.url" target="_blank">{{l.text}}</a>
                </template>
                <template v-else>
                    <span>No link available.</span>
                </template>
            </div>
            <span>{{works.createdOn}}</span>
    </div>
</template>

<script>
export default {
    props: {
        works: Object
    }
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
</style>