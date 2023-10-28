<template>
  <div class="container">
    <div class="adminSet">
      <img :src="previewImage" class="uploading-image" />
      Добавить фото
      <input type="file" accept="image/jpeg" @change=uploadImage>
    </div>
  </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex';
export default {
  name: 'GalleryComp',

  data() {
    return {
      previewImage: null
    }
  },



  methods: {
    ...mapMutations(['APPENDIMAGE']),

    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
        this.APPENDIMAGE(this.previewImage);
      };
    },

    
  },
  props: {

  },
  computed: {
    ...mapGetters(['getImages']),
  },
}

</script>
  
 
<style scoped lang="scss">
.adminSet {
  height: 80vh;
  width: 100%;

}

.galleryImage {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  transition: 0.4s ease-in-out;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.uploading-image{
  height: 400px;
  width: 400px;
}
</style>