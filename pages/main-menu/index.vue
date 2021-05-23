<template>
  <div class="main-menu">
    <div class="page_container">
      <!-- {{ all_menus.filter(m=> m.category == 'soups') }} -->

      <table4Col1price title="Starters" :menus="getStarters" />

      <table4Col1price
        title="Soups"
        :menus="all_menus.filter(menu => menu.category == 'soups')"
      />

      <table4Col1price
        title="Chicken and Duck"
        :menus="all_menus.filter(menu => menu.category == 'chicken_duck')"
      />

      <table4Col1price
        title="Pork"
        :menus="all_menus.filter(menu => menu.category == 'pork')"
      />

      <table4Col1price
        title="Beef"
        :menus="all_menus.filter(menu => menu.category == 'beef')"
      />

      <table4Col1price
        title="Seafood"
        :menus="all_menus.filter(menu => menu.category == 'seafood')"
      />

      <table4Col1price
        title="Curry"
        :menus="all_menus.filter(menu => menu.category == 'curry')"
      />

      <table4Col1price
        title="Salad"
        :menus="all_menus.filter(menu => menu.category == 'salad')"
      />

      <table4Col1price
        title="Vegetables"
        :menus="all_menus.filter(menu => menu.category == 'vegetables')"
      />

      <table4Col1price
        title="Rice"
        :menus="all_menus.filter(menu => menu.category == 'rice')"
      />

      <table4Col1price
        title="Noodles"
        :menus="all_menus.filter(menu => menu.category == 'noodles')"
      />
      <div class="hot"><i>*</i> Mild, <i>**</i> Medium, <i>***</i> Hot</div>
      <div class="change">ALL PRICES ARE SUBJECT TO CHANGE</div>
      <!-- {{all_menus}} -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  head: {
    title: 'Main Menu | Bangkok Pavilion',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Our main menus, starters, soups, chicken and duck, pork, beef, seafood, curry, salad, vegetables, rice, noodles',
      },
    ],
  },
  data() {
    return {
      cats: [
        'starters',
        'soups',
        'chicken_duck',
        'pork',
        'beef',
        'seafood',
        'curry',
        'salad',
        'vegetables',
        'rice',
        'noodles',
      ],
    }
  },
  computed: {
    getStarters() {
      return this.all_menus.filter(m => m.category == 'starters')
    },
  },
  asyncData(context) {
    // let url = 'https://bangkokpavilion.co.uk/'
    return context.$axios
      .get('all_menus?menu=main')
      .then(res => {
        // console.log(res.data)
        return { all_menus: res.data }
      })
      .catch(error => {
        context.error({
          message: 'ajax problem', // if custom error set
        })
        // context.redirect('/')
      })
  },
}
</script>
