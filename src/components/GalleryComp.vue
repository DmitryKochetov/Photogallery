<template>
    <div class="container">
        <div class="mainSet">
            <div v-for="item in getImages" :key="item.id">
                <div class="galleryImage" @click="enlarge(item)" :style="{ backgroundImage: `url(${item.img})` }"></div>
            </div>
            <div class="photoView" :style="{visibility: visibilityBigPhoto}" @click="close()">
                <div class="photoViewImage"  :style="{ backgroundImage: `url(${currentImage})`, visibility: visibilityBigPhoto }"></div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'GalleryConp',
    props: {

    },
    data() {
        return {
            currentImage: '',
            visibilityBigPhoto: 'hidden',
        }
    },
    computed: {
        ...mapGetters(['getImages', 'takeCurrentImage']),
    },
    methods: {
        enlarge(item) {
            // let parsedObj = JSON.parse(JSON.stringify(item));

            console.log(item.id);
            this.currentImage = this.takeCurrentImage(item.id);
            this.visibilityBigPhoto = 'visible';
            // console.log(this.visibilityBigPhoto);
            // item.style.transform = "scale(1.5)";
            // item.style.transition = "transform: 0.25s ease";
        },
        close() {
            this.visibilityBigPhoto = 'hidden';
            console.log(this.visibilityBigPhoto);
        },
    },
}


</script>
  
 
<style scoped lang="scss">
.mainSet {
    height: 80vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(30%, 1fr));
    gap: 8px;
    position: relative;
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

.photoViewImage {
    height: 80vh;
    width: 80vw;
    position: absolute;
    top: -5vh;
    left: 0;
    z-index: 50;
    // background-color: antiquewhite;
    background-size:contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.4s ease-in-out;
    
}
</style>
  