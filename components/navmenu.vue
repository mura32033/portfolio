<template>
    <div class="nav">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/works">Works</NuxtLink>
        <NuxtLink to="/research">Research</NuxtLink>
        <NuxtLink to="/docs">Docs</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
</template>

<style lang="scss">
.nav {
    @apply md:flex flex-col md:flex-row items-center md:border-b-4 md:border-b-emerald-400 md:border-solid md:gap-12 justify-center m-auto w-full md:w-11/12;
    a {
        @apply block py-2 px-8 md:-mb-1 md:hover:rounded-t-md md:hover:bg-emerald-400 md:hover:font-bold;
        min-width: 64px;
        &.nuxt-link-active {
            @apply font-bold rounded-tr-full rounded-br-full md:rounded-t-md md:rounded-br-none bg-emerald-400;
        }
    }
}
</style>