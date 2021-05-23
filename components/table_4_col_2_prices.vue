<template>
  <div class="menu">
    <h5>{{ title }}</h5>
    <table>
      <thead>
        <tr>
          <th class="row_number"></th>
          <th>Item</th>
          <th class="price">1-Course</th>
          <th class="price">2-Course</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(menu, index) in menus" :key="index">
          <td class="row_number">{{ menu.id }}</td>
          <td v-html="menu.item"></td>
          <td class="price">{{ Number(menu.price1) | twoPlaces }}</td>
          <td class="price">{{ Number(menu.price2) | twoPlaces }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['menus', 'title'],
}
</script>
