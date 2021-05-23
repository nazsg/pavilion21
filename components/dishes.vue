<template>
  <div class="dishes">
    <div class="images" >
      <img class="imgShow" src="/dish01.jpg" alt />
      <img class="imgShow" src="/dish02.jpg" alt />
      <img class="imgHide imgShow" src="/dish03.jpg" alt />
      <img class="imgHide imgShow" src="/dish04.jpg" alt />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.dishes {
  background-color: none;
}
.images {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 650px) {
    .imgHide {
      display: none;
    }
  }
  img {
    display: block;
    border-radius: 50%;
    width: 300px;
    margin: 25px 5px;
    border: 1px solid #929292;
  }
  @media (min-width: 651px) {
    flex-direction: row;
    img {
      display: block;
      width: 145px;
    }
  }
  @media (min-width: 850px) {
    img {
      width: 190px;
    }
  }
}
</style>