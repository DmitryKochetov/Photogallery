<template>
    <div class="footer">
        <footer>
            <div class="container footerSet">
                <div class="headerItem">Автор Кочетов Дмитрий</div>
            </div>
        </footer>

    </div>
</template>
  
<script>
export default {
    name: 'Footer-block',
    props: {
       
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.footerSet {
    padding: 4vh 0;
    height: 10vh;
    width: 80vw;
    display: flex;
    // flex-direction: row;
    justify-content: start;
    align-items: center;
}
</style>