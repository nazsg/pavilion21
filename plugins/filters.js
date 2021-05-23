import Vue from 'vue'

Vue.filter('lineBreakNew', function(value) {
  return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
});
Vue.filter('tidyTitle', function(value) { // used to display category titles in admin/index, admin/edit-menus
  return value.replace(/(?:_)/g, ' and ');
});
Vue.filter('twoPlaces', function(value) {
  return '£ ' + value.toFixed(2);
});
Vue.filter('upper', value => value.toUpperCase());