<template>
  <div id="index">
    <section>
      <h2>こんにちは</h2>
        <div class="sectionContent">
          <img class="profileImg" src="https://mura32033.com/assets/img/selfie.png" alt="selfie">
          <div class="contentGroup">
            <Infodesc v-for="(i, index) in getAbout.info" :key="index" :data="i" />
          </div>
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