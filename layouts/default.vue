<template>
<div :class="dark ? 'dark' : 'light'">
    <div class="bg-white dark:text-white dark:bg-gray-900">
        <header>
            <div class="logo">
                <h1><NuxtLink to="/" exact-active-class="" exact>むらさん</NuxtLink></h1>
            </div>
            <Navmenu />
            <div class="toggle">
                <button @click="toggleTheme">
                    <font-awesome-icon icon="fas fa-moon" />
                </button>
            </div>
        </header>
        <transition name="move">
            <Nuxt class="content" />
        </transition>
        <div class="footer">
            <footer>
                <span>2022 murasan.</span>
            </footer>
        </div>
    </div>
</div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        computed: {
            ...mapGetters(['dark'])
        },
        methods: {
            ...mapMutations(['setDark']),
            toggleTheme() {
                this.setDark(!this.dark)
            }
        },
        mounted () {
            if (localStorage.theme === undefined) {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    localStorage.theme = 'dark'
                    this.setDark(true)
                } else {
                    localStorage.theme = 'light'
                }
            } else {
                this.setDark(localStorage.theme === 'dark')
            }
        }
    }
</script>

<style lang="scss">
header {
    @apply flex flex-col items-center;
    h1 {
        @apply text-6xl font-bold my-8;
    }
}
.move-enter {
    opacity: 0;
}
.move-enter-active {
    transition: opacity .3s ease;
}
.content {
    @apply flex flex-col flex-1 my-8 mx-auto w-11/12 md:w-3/4;
    section {
        @apply mb-12 last:mb-0;
    }
    h1 {
        @apply text-5xl font-bold leading-normal;
    }
    h2 {
        @apply text-4xl font-bold my-8 leading-normal;
    }
    h3 {
        @apply text-2xl font-bold my-6 leading-normal;
    }
}
.footer {
    @apply flex flex-col items-center bg-slate-700 text-white h-16 justify-center tracking-wider;
}
.card {
    @apply flex flex-col items-center p-4 border border-teal-200 shadow-lg rounded-xl;
}
</style>