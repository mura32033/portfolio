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
    <section>
      <h2 id="policy">ポリシー</h2>
      <p><a href="https://portfolio.mura32033.com" class="linkItem">ポートフォリオサイト</a>ならびにmura32033.com下で公開している一部制作物(以下、本サイト)では、Google社提供のアクセス解析ツールであるGoogle Analyticsを利用しており、データ収集のためにCookieを使用しています。</p>
      <p>本サイトを利用することにより上記に同意したものとみなします。</p>
      <br>
      <p>詳細は、<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" class="linkItem">Google アナリティクス利用規約</a>・<a href="https://policies.google.com/technologies/partner-sites?hl=ja" class="linkItem">GOOGLE のサービスを使用するサイトやアプリから収集した情報の GOOGLE による使用</a>をご覧ください。</p>
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