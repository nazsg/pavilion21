<template>
  <div class="">
    <a name="#top"></a>
    <div class="anchors"> <a name=#top></a>
      <a v-for="(cat, index) in cats" :href=" 'admin#' + cat" :key="index">{{cat | tidyTitle }}</a>
    </div>
    <editMenus v-for="(cat, index) in cats" :key="index" :title="cat" :oneMenu="all_menus" />
  </div>  
</template>

<script>
import editMenus from '@/components/admin/edit-menus'
export default {
  components: { editMenus },
  layout: 'admin',
  data() {
    return {
      cats: ['starters', 'soups', 'chicken_duck', 'pork', 'beef', 'seafood', 'curry', 'salad', 'vegetables', 'rice', 'noodles']
    }
  },
  asyncData(context) {
    return context.$axios.get('all_menus?menu=all')
    .then(res => {
      return { all_menus: res.data }
    })
    .catch(error => console.log(error))
  }
}
</script>

<style lang="scss" scoped>
.anchors {
  padding: 15px 0;
  display: flex;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    text-transform: capitalize;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>