<template>
  <div class="wrapper">
    <appHeader />
    <div class="content" :class="bg">
      <nuxt />
      <dishes :class="visibility" />
    </div>
    <appFooter />
  </div>
</template>

<script>
import dishes from '../components/dishes'
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
export default {
  components: { appHeader, appFooter, dishes },
  data() {
    return {
      bg: 'test',
      visibility: 'show',
    }
  },
  watch: {
    $route(to, from) {
      this.bg = this.$route.path.replace('/', '')
      this.visibility = this.$route.path == '/contact-us' ? 'hide' : 'show'
    },
  },
}
</script>

<style lang="scss">
.hide {
  display: none;
}
$bg: #caf4fa;
.content {
  background-color: $bg;
  background-image: url('/veg1.jpg');
  background-position: top left;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main-menu {
  background-color: darken($bg, 2);
  background-image: url('/dish-idea2.jpg');
  background-size: cover;
  background-attachment: fixed;
}
.set-menus {
  // background-color: darken($bg, 4);
  // background-image: url('/Slice2.svg');
  background-position: bottom right;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.drinks {
  background-color: darken($bg, 6);
}
.locate-us {
  background-color: darken($bg, 8);
}
@import './default/contact-us';
* {
  padding: 0px;
  // margin: 0px;
  transition: 0.3s;
}

html {
  overflow: auto;
  // font-family: Roboto;
  font-family: 'Handlee', cursive;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: bold;
  color: #666;
}
p,
body,
footer {
  padding: 0px;
  margin: 0px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    flex: 1 0 auto;
    // padding-top: 20px;
    padding-bottom: 20px;
  }
}

.page_container {
  width: 95%;
  padding-top: 20px;
  margin: 0 auto;
  @media (min-width: 900px) {
    max-width: 900px;
    margin: 0 auto;
  }
  .menu {
    h5 {
      background-color: #d4d3d3;
      padding: 10px;
      border-bottom: 2px solid #aaaaaa;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #585858;
      margin-bottom: 1px;
    }
    @import './default/table';
  }
}

@import './default/header';
.setmenus {
  position: relative;
  .bg {
    position: absolute;
    right: 0;
    // bottom: 0;
    background-image: url('/Slice2.svg');
    background-repeat: no-repeat;
    // background-attachment: scroll;
    width: 100px;
    // height: 1200px;
  }
}
main {
  width: 100%;
  margin: 0 auto;
  p.intro,
  h1 {
    font-size: 1.2rem;
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    // color: #666;
  }
}
.hot {
  color: red;
  background-color: #fff;
  margin: 10px;
  text-align: center;
  i {
    font-style: normal;
    font-size: 1.5rem;
  }
}
aside {
  margin: 0 auto;
}
aside,
section {
  padding: 20px;
}
.discount {
  color: #bd6319;
  margin-top: 10px;
  @media (min-width: 837px) {
    position: relative;
    float: right;
    font-size: 3rem;
    transform: rotate(-5deg);
    margin-top: -80px;
    margin-right: -90px;
    i {
      font-style: normal;
      display: block;
      font-size: 1.5rem;
      // text-align: right;
    }
  }
}

aside[itemscope] {
  display: block;
  time {
    display: block;
  }
}
address {
  font-style: normal;
}
@media (min-width: 750px) {
  main {
    a {
      font-size: 4rem;
    }
  }
}
.home {
  $col: #171817;
  color: $col;
  a {
    color: $col;
  }
  main {
    width: 80%;
    section {
      a {
        font-size: 32px;
      }
    }
  }
  main,
  aside {
    background-color: #c4d195d7;
    padding: 10px;
    border-radius: 10px;
  }
  aside {
    margin: 10px auto;
    width: 50%;
    letter-spacing: 2px;
    @media (max-width: 680px) {
      width: 80%;
    }
    @media (max-width: 829px) {
      width: 60%;
    }
  }
}
.drinks {
  background-image: url('/wine3.jpg');
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .menu table .wine-price {
    display: block;
    @media (min-width: 600px) {
      display: flex;
      justify-content: space-between;
    }
  }
}

.change {
  color: rgb(7, 6, 6);
  background-color: #e69f9f;
  padding: 5px 0;
  width: 320px;
  text-align: center;
}

@import './default/footer';
</style>
