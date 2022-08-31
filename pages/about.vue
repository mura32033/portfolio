<template>
    <div id="about">
        <Pagetitle>
            <template #title>About</template>
        </Pagetitle>

        <section>
            <h2>資格</h2>
            <div class="certificateCardGroup">
                <Certificate v-for="(c, index) in about.skill.certificate" :key="index" :data="c" />
            </div>
        </section>
        <section>
            <h2>スキル</h2>
            <div class="skillCardGroup">
                <Skill v-for="(s, index) in about.skill.skill" :key="index" :data="s" />
            </div>
        </section>
        <section>
            <h2>Publication</h2>
            <div class="publicationCardGroup">
                <Publication v-for="(u, index) in about.publication" :key="index" :data="u" />
            </div>
        </section>
        <section>
            <h2>受賞歴</h2>
            <div class="awardCardGroup">
                <Award v-for="(a, index) in about.award" :key="index" :data="a" />
            </div>
        </section>
        <section>
            <h2>発表歴</h2>
            <div class="presentCardGroup">
                <Present v-for="(p, index) in about.present" :key="index" :data="p" />
            </div>
        </section>
        <section>
            <h2>生い立ち</h2>
            <Infodesc v-for="(h, index) in about.history" :key="index" :data="h" />
        </section>
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const about = await $content('json/about').fetch()
        return { about }
    },
    head() {
        return{
            title: "About"
        }
    }
}
</script>

<style lang="scss">
.skillCardGroup, .awardCardGroup, .certificateCardGroup, .presentCardGroup, .publicationCardGroup{
    @apply grid gap-4 grid-cols-1;
}
.skillCardGroup {
    @apply md:grid-cols-4;
}
.awardCardGroup, .presentCardGroup, .publicationCardGroup {
    @apply md:grid-cols-2;
}
.certificateCardGroup {
    @apply md:grid-cols-3;
}
</style>