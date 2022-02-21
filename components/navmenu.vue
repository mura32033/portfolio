<template>
    <div class="nav">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/works">Works</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/docs">Docs</NuxtLink>
    </div>
</template>

<style lang="scss">
.nav {
    @apply hidden md:flex flex-row items-center border-b-4 border-b-emerald-400 border-solid gap-12 justify-center m-auto w-11/12;
    a {
        @apply block py-2 px-8 -mb-1 hover:rounded-t-md hover:bg-emerald-400 hover:font-bold;
        min-width: 64px;
        &.nuxt-link-active {
            @apply font-bold rounded-t-md bg-emerald-400;
        }
    }
}
</style>