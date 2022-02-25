<template>
  <div id="index">
    <section>
      <h2>こんにちは</h2>
        <div class="sectionContent">
          <img class="profileImg" src="https://mura32033.com/assets/img/selfie.png" alt="selfie">
          <div class="contentGroup">
            <Infodesc :data="data.belongings" />
            <Infodesc :data="data.born" />
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
      const data = await $content('json/info').fetch()
      return { data }
    },
    head() {
        return{
            title: "Hello, murasan world!"
        }
    }
}
</script>

<style lang="scss">
#index {
  > section{
    .profileImg {
      @apply mr-0 md:mr-20 object-cover max-w-full sm:max-w-xs lg:max-w-sm;
    }
    .sectionContent {
      @apply flex flex-col md:flex-row items-center justify-center;
      .contentGroup {
        @apply flex flex-col mt-6 md:mt-0;
      }
    }
  }
}
</style>