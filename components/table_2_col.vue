<template>
  <div class="menu">
    <h5>{{ title }}</h5>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(menu, index) in menus" :key="index">
          <td class="row_number">{{ menu.id }}</td>
          <td v-html="menu.item"></td>
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
