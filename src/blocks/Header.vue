<template>
    <header class="container">
        <nav class="header">
            <div class="headerLeft">
                <router-link to="/">
                    <div class="headerItem">Галерея</div>
                </router-link>
            </div>
            <div class="headerRight">
                <router-link to="/about">
                    <div class="headerItem">About</div>
                </router-link>
                <router-link to="/admin">
                    <div class="headerItem">Редактор</div>
                </router-link>
            </div>
        </nav>
    </header>
</template>
  
<script>
export default {
    name: 'Header-block',
    props: {
        msg: String
    }
}
</script>
  
<style lang="scss">
.header {
    padding: 4vh 0;
    height: 10vh;
    width: 80vw;
    display: flex;
    // flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.headerRight {
    width: 15vw;
    display: flex;
    // flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.headerItem {
    color: #292f36;
    font-size: 1.5rem;
    line-height: 125%;
    font-style: normal;
    font-weight: 600;
}
</style>