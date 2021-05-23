<template>
  <div class="admin_wrapper">
    <adminHeader />
    <div class="admin_content">
    <nuxt />
    </div>
    <adminFooter />
  </div>
</template>

<script>
import adminHeader from '@/components/admin/admin_header'
import adminFooter from '@/components/admin/admin_footer'
export default {
  components: { adminHeader, adminFooter }
}
</script>

<style lang="scss">

.admin_wrapper {
  // width: 800px;
  // margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .admin_content {
    flex: 1 0 auto;
  }
}
</style>