<template>
  <footer>
    <p>
      &copy; {{ new Date().getFullYear() }} ADMIN FOOTER
    </p>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  flex-shrink: 0;
  height: 60px;
  background-color: rgb(167, 166, 166);
  line-height: 60px;
  text-align: center;
}

</style>