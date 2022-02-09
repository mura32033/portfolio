<template>
<div class="container">
    <header>
        <div class="logo">
            <h1><NuxtLink to="/">むらさん</NuxtLink></h1>
        </div>
        <Navmenu />
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
</template>

<style lang="scss">
$primary: #333;
body {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    h1 {
        font-size: 4rem;
        font-weight: bold;
        margin: 1rem 0;
    }
    h2 {
        font-size: 3rem;
        font-weight: bold;
        margin: 3rem auto;
        padding-bottom: 1rem;
        position: relative;
        &::after {
            background-image: linear-gradient(to right, transparent, #333);
            content: '';
            display: block;
            height: 1px;
            position: absolute;
            width: 100%;
            right: 0;
            bottom: 0;
        }
    }
    h3 {
        font-size: 2rem;
        font-weight: bold;
        margin: 2rem auto;
        position: relative;
    }
    h4 {
        font-size: 1.5rem;
        font-weight: bold;
    }
    width: 100%;
    min-height: 100vh;
}
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    .nav {
        align-items: center;
        border-bottom: 4px solid rgba(51, 51, 51, .2);
        display: flex;
        flex-direction: row;
        gap: 3rem;
        justify-content: center;
        margin: auto;
        width: 90%;
        a {
            display: block;
            padding: .5rem 2rem;
            margin-bottom: -4px;
            min-width: 64px;
        }
    }
}
a.nuxt-link-active {
    font-weight: bold;
}
a.nuxt-link-exact-active {
    border-bottom: 4px solid#00c58e;
}
.move-enter {
    opacity: 0;
}
.move-enter-active {
    transition: opacity .3s ease;
}
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.content {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 2rem auto;
    width: 75%;
    section {
        margin-bottom: 3rem;
        &:last-child{
            margin-bottom: 0;
        }
    }
}
.footer {
    align-items: center;
    background-color: $primary;
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 4rem;
    justify-content: center;
    letter-spacing: 2.5px;
}
</style>