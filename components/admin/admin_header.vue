<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/admin">Home</nuxt-link></li>
        <li>
          <nuxt-link to="/admin/ad-main">Main Menu</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admin/ad-set-lunch">Set and Lunch Menus</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admin/ad-drinks">Drinks</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
$col1 : #000;
$col2 : #262626;
* {
  padding: 0px;
}
header {
  @media (min-width: 800px) {
    line-height: 60px;
  }
  background-color: #7c7c7c;
  border-bottom: 2px solid #616161;
}

.hideUL {
  ul li {
    display: none;
  }
}
nav {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
    // line-height: 58px;

  ul {
    width: 100%;
    background-color: $col1;
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 800px) {
      flex-direction: row;
    }

    li {
      width: 30%;
      width: 100%;
      &:hover > ul {
        display: flex;
      }

      > ul {
        display: none;
        flex-direction: column;

        li {
          width: 100%;
        }
      }
    }
  }

  a {
    text-transform: uppercase;
    display: block;
    background: $col1;
    color: white;
    text-decoration: none;
    text-align: center;

    &:hover {
      background-color: #74889e;
      color: white;
    }
  }

  .drop-down {
    position: relative;
    > a:after {
      content: " \2935";
    }
    li {
       a {
        background: #000;
        color: #ffffff;

        &:hover {
          background: #74889e;
        }
      }
    }
  }
  .drop-down ul  {
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
  }
}
</style>