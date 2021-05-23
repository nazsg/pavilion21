<template>
  <div class="menu">
    <h5>{{ title }}</h5>
    <table>
      <thead>
        <tr>
          <th class="row_number"></th>
          <th>Item</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(menu, index) in menus" :key="index">
          <td class="row_number">{{ index + 1 }}</td>
          <td>{{ menu.item }}</td>
          <td
            v-if="menu.price1 != 0 && menu.price2 != 0"
            v-html="
              $options.filters.lineBreakNew(menu.description) +
                '<div class=\'wine-price\'>' +
                (menu.price1 == 0 ? '' : '<i>175ml: £ ' + Number(menu.price1)) +
                '</i>' +
                (menu.price2 == 0 ? '' : '<i>250ml: £ ' + Number(menu.price2)) +
                '</i>' +
                (menu.price3 == 0 ? '' : '<i>bottle: £ ' + Number(menu.price3)) +
                '</i></div>'
            "
          ></td>
          <td
            v-else
            v-html="
              $options.filters.lineBreakNew(menu.description) +
                '<div class=\'wine-price\'>' +
                (menu.price3 == 0 ? '' : '<i>bottle: £ ' + Number(menu.price3)) +
                '</i></div>'
            "
          ></td>
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
