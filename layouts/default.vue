<template>
<div class="container">
    <header>
        <div class="logo">
            <h1><NuxtLink to="/">むらさん</NuxtLink></h1>
        </div>
        <Navmenu />
    </header>
    <Nuxt class="content" />
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
    min-height: 100vh;
}
header {
    display: flex;
    flex-direction: row;
    align-items: center;
}
a.nuxt-link-active {
  font-weight: bold;
}
a.nuxt-link-exact-active {
  color: #00c58e;
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