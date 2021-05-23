<template>
  <header>
    <nav>      
      <a class="menu" @click="show = !show"><MenuIcon /></a>
      <ul class="ul" :class="{ showUL : show }">
        <li @click="show = false">
          <nuxt-link to="/">Home</nuxt-link></li>
        <li @click="show = false" >
          <nuxt-link to="/main-menu">Main Menu</nuxt-link>
        </li>
        <li @click="show = false">
          <nuxt-link to="/set-menus">Set Menus</nuxt-link>
        </li>
        <li @click="show = false">
          <nuxt-link to="/drinks">Drinks</nuxt-link>
        </li>
        <li @click="show = false">
          <nuxt-link to="/locate-us">Locate Us</nuxt-link>
        </li>
        <li @click="show = false">
          <nuxt-link to="/contact-us">Contact Us</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
export default {
  data() {
    return {
      show: false
    }
  },
  components: { MenuIcon },
  methods: {
    onResize(event) {
      // console.log("window has been resized", event);
      this.show = false
    }
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);    
  } 
}
</script>
