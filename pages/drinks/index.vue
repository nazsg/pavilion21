<template>
  <div class="drinks">
    <div class="page_container">
      <table6Col3prices title="Wines" :menus="drinks.filter(m=>m.category == 'wine')" />
      <table3Col1price title="Aperitifs" :menus="drinks.filter(m=>m.category == 'aperitifs')" />
      <table3Col1price title="Brandy" :menus="drinks.filter(m=>m.category == 'brandy')" />
      <table3Col1price title="ports" :menus="drinks.filter(m=>m.category == 'ports')" />
      <table3Col1price title="liqueurs" :menus="drinks.filter(m=>m.category == 'liqueurs')" />
      <table3Col1price title="spirits" :menus="drinks.filter(m=>m.category == 'spirits')" />
      <table3Col1price title="lager" :menus="drinks.filter(m=>m.category == 'lager')" />
      <table3Col1price title="soft drinks" :menus="drinks.filter(m=>m.category == 'soft-drinks')" />
      <table3Col1price title="mineral water" :menus="drinks.filter(m=>m.category == 'water')" />
      <div class="change">ALL PRICES ARE SUBJECT TO CHANGE</div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Drinks Menu | Bangkok Pavilion',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Drinks Menu, wines, Monsoon Valley White (Chenin Blanc & Colombard), Shiraz Rose, Monsoon Valley, aperitifs, brandy, ports, liqueurs, spirits, lager, soft drinks, mineral water' }
    ]
  },
  data() {
    return {
      drinks: []
    };
  },
  created() {
    let url = "https://bangkokpavilion.co.uk/";
    this.$axios
      .get("all_menus?menu=drinks")
      .then(res => (this.drinks = res.data))
      .catch(err => console.log(err));
  }
  // asyncData(context) {
  //   return context.$axios.get('all_menus?menu=drinks')
  //   .then(res => {
  //     return { drinks: res.data }
  //   })
  //   .catch(error => {
  //     context.error({
  //       message: 'ajax problem'  // if custom error set
  //     })
  //     // context.redirect('/')
  //   })
  // },
};
</script>