<template>
  <div class="page_container">
    <div class="iframe">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.6333847725305!2d1.4006320157596472!3d51.22582897958988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47deaecf9db0a93f%3A0xfe914440a6b5f45f!2s114+High+St%2C+Deal+CT14!5e0!3m2!1sen!2suk!4v1498062611907"
        width="100%"
        height="450"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Locate Us | Bangkok Pavilion',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Locate us on Google map, directions to get to us' }
    ]
  },  
};
</script>

<style lang="scss" scoped>
.iframe {
  width: 95%;
  margin: 0 auto;
  iframe {
    border-radius: 15px;
    border: 1px solid #ccc8c8;
  }
}
</style>