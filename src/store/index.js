import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    image: "",
    images: [
      {
        id: 1,
        name: 'img1',
        img: require(`@/assets/0DqI34DZo4k.jpg`),
      },
      {
        id: 2,
        name: 'img1',
        img: require(`@/assets/4-Cq3MbTGqA.jpg`),
      },
    ],
  },

  methods: {

  },

  getters: {
    getImages(state) {
      return state.images;
    },
    takeCurrentImage: state => id => {
      return state.images.find(el => el.id === id).img;
    },
  },
  mutations: {
    LOADIMAGES(state){
      if (localStorage.getItem('images')) {
        try {
          state.images = JSON.parse(localStorage.getItem('images'));
          // for (let index = 0; index < state.images.length; index++) {
          //   state.images[index] = JSON.parse(JSON.stringify(state.images[index]));
          //   console.log(state.images[index]);
          // }
          // state.images = JSON.parse(JSON.stringify(state.images));
          // console.log(state.images);
        } catch(e) {
          localStorage.removeItem('images');
        }
      }
    },

    APPENDIMAGE(state, image) {
      let newObject = {};
      newObject.img = image;
      newObject.id = Math.random().toString(16).slice(2);
      // state.idCounter++;
      state.images.push(newObject);
      const parsed = JSON.stringify(state.images);
      localStorage.setItem('images', parsed);
    }
  },
  actions: {
  },
  modules: {
  }
})
