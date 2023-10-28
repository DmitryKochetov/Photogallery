<!-- 2. Написать простейший сайт-фотогалерею.
Содержит набор отдельных фотогалерей и изображений в них.
Две части:
1) Админ-панель: просмотр, добавление, переименование, удаление галерей/картинок;
2) Frontend:
 - Просмотр списка галерей с первой добавленной фотографией в качестве превью;
 - Просмотр содержания галерей с динамической подгрузкой изображений на страницу при вертикальном скроллинге;
 - Просмотр полноразмерной версии изображения по клику на миниатюру
  -->

<template>
  <div id="app">
    <div class="wrapper">
      <div class="content">
        <Header />
        <router-view />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './blocks/Header.vue'
import Footer from './blocks/Footer.vue'
import { mapMutations } from 'vuex';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations(['LOADIMAGES']),
  },

  mounted() {
    this.$store.commit('LOADIMAGES');
  },

}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

.standartDMText {
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 400;
}

.container {
  max-width: 80vw;
  margin: 0 auto;
}

.wrapper {
	display: flex;
	flex-direction: column;
	min-height: 100%;
}
.content {
	flex: 1 0 auto;
}
.footer {
	flex: 0 0 auto;
}
</style>
