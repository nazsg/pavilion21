<template>
  <div class="contact-us">
    <div v-if="formSubmitted" class="submitted">
      <p>Thank you.</p>
      <p>Your enquiry has been submitted.</p>
    </div>
    <form v-else>
      <div class="group g1">
        <label for="">Name</label> <input type="text" v-model="info.name">
      </div>
      <div class="group g1">
        <label for="">Email</label> <input type="text" v-model="info.email">
      </div>
      <div class="group g2">
        <label for="">Message</label> <textarea name="" id="" cols="30" rows="10" v-model="info.message"></textarea>
      </div>
      <div class="antispam">
        <antispam v-if="result == 'unverified'" result="unverified" v-on:updateResult="result = arguments[0]" />
      </div>
      <div class="group actions center">
        <button @click.prevent="clear">Clear</button> 
        <button v-if="result == 'verified'" @click.prevent="validate">Submit</button>
        <button v-else class="disabled" @click.prevent>Submit</button>        
        <!-- <SendIcon :size=size /> <DeleteIcon :size=size @click="clear"/> -->
      </div>
      <div class="error">{{ formResult }}</div>
    </form>
    &nbsp;

  </div>
</template>

<script>
import SendIcon from 'vue-material-design-icons/EmailSend.vue'
import DeleteIcon from 'vue-material-design-icons/TrashCanOutline.vue'
import antispam from '~/components/antispam'
export default {
  head: {
    title: 'Contact Us | Bangkok Pavilion',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Contact us by sending us an email' }
    ]
  },
  components: { SendIcon, DeleteIcon, antispam },
  layout: 'blue',
  data() {
    return {
      info: {
        name: '', email: '', message: '', submitToOskars: true
      },
      size: 40, result: 'unverified',
      formSubmitted: false,
      formResult: ""
    }
  },
  methods: {
    clear() {
      this.info.name = '', this.info.email = '', this.info.message = '', this.formResult = ''
    },
    validate() {
      this.formResult = ''
      let _ = this.info
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let err = false
      let email_err = ''
      if(_.name == '' || _.email == '' || _.message == '') err = true
      if(_.email.trim() !== '') {
        if(re.test(String(this.info.email).toLowerCase()) == false) {
          err = true; email_err = ' and email needs a valid format'
        }
      } else { err = true }
      if(err == true) this.formResult = 'pls fill out all fields' + email_err
      if(err == false) this.submit()
    },
    submit() {
      this.$axios.post("https://bangkokpavilion.co.uk/mailer2.php", this.info).then(res => {
        if (res.data == "Success") {
          this.formSubmitted = true;

        } else {
          console.log(res.data)
          this.formResult =
            "Sorry your message was not sent. Please try again later.";
        }
      })
    }    
  }
}
</script>
