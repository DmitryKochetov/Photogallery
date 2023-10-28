<template>
  <div class="home">
    <GalleryComp/>
  </div>
</template>

<script>
// @ is an alias to /src
import GalleryComp from '@/components/GalleryComp.vue'

export default {
  name: 'HomeView',
  components: {
    GalleryComp
  }
}
</script>
