<template>
      <!-- <div class="all_menus" v-for="(menu, index) in oneMenu.filter(m=>m.category == title)" :key="index"> -->
    <form>
      <a :name="title"></a>
      <h2>{{ title | tidyTitle }}</h2> 
      <div class="all_menus" v-for="(menu, index) in oneMenu.filter(m=>m.category == title)" :key="index">
          <span>{{index+1}}</span>
        <div class="group">       
          <div>
            <textarea v-model="menu.item" rows="4" cols=""> </textarea>
          </div>
          <div>
            <textarea v-model="menu.description" rows="5" cols="35"> </textarea>
          </div>
          <div>
            <input type="text" v-model="menu.price1">
            <template v-if="menu.price2 != 0">
              <input type="text" v-model="menu.price2">
            </template>            
          </div>
        </div>
      </div> 
      <a style="position: fixed; bottom:60px; left: 20px" href="admin#top"><arrowUp size=30 /></a>
    </form>

</template>

<script>
import arrowUp from 'vue-material-design-icons/ArrowUp.vue'
export default {
  props: ['oneMenu', 'title'],
  components: { arrowUp },
}
</script>

<style lang="scss" scoped>
.names {
  text-align: center;
  position: sticky;
}
form {
  width: 700px;
  margin: 10px auto;
  text-align: left;
  border: 1px solid #8d8d8d;

  textarea, input {
    border: 1px solid #a09e9e;
    padding: 5px;
  }

  h2 {
    text-align: center;
    letter-spacing: 3px;
    padding: 10px;
    text-transform: capitalize;
  }
  .all_menus {
    width: 100%;

    span {
      color: #7a7a7a;
    }
    .group {
      display: flex;
      justify-content: space-around;
      padding: 10px;
      border-bottom: 1px solid #999;

      input {
        width: 60px;
        display: block;
        margin-bottom: 5px;
      }

      textarea {
        width: 250px;
        height: 100px;
        overflow: auto;
        resize: none;
      }
    }
  }
}
</style>