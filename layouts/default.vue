<template>
<div>
    <div class="nav">
        <NuxtLink v-scroll-to="'#about'" to>About</NuxtLink>
        <NuxtLink v-scroll-to="'#works'" to>Works</NuxtLink>
        <NuxtLink v-scroll-to="'#contact'" to>Contact</NuxtLink>
    </div>
    <h1>むらさん</h1>
    <Nuxt />
    <div class="footer">
        <footer>
            <span>2022 murasan.</span>
        </footer>
    </div>
</div>    
</template>

<style lang="scss">
$primary: #333;
body {
    font-size: 16px;
    line-height: 1.5;
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.5rem;
    }
    h4 {
        font-size: 1.25rem;
    }
    width: 100%;
}
.footer {
    align-items: center;
    background-color: $primary;
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 4rem;
    padding-top: 1rem;
    letter-spacing: 2.5px;
}
</style>