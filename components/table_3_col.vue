<template>
  <div class="menu">
    <h5>{{ title }}</h5>
    <table>
      <thead>
        <tr>
          <th class="row_number"></th>
          <th>Item</th>
          <th>Description</th>
          <th class="price">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(menu, index) in menus" :key="index">
          <td class="row_number">{{ menu.id }}</td>
          <td class="item" v-html="$options.filters.lineBreakNew(menu.item)"></td>
          <td
            class="description"
            v-html="$options.filters.lineBreakNew(menu.description)"
          ></td>
          <td class="price">
            {{ Number(menu.price1) | twoPlaces }}
            <span class="setMenu">per person</span>
          </td>
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
