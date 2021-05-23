<template>
  <div>
    <!-- <dishes /> -->
    <footer>
      <div class="cookies" :class="{consent}">
        <p>
          
          Our website uses cookies<br/><br />
          Bangkok Pavilion uses cookies to improve user experience. We also show safe, secure and non personal advertising to support this site. By using our website you consent to our cookies in accordance with our Cookie Policy.<br /><br/>
          <button @click="consent = true">Continue</button>
  

        </p>
      </div>
      <div>
        <ul>
          <li>&copy; 2005 - {{ new Date().getFullYear() }} Bangkok Pavilion</li>
          <!-- <li>
            Follow us:
            <Face title="Follow us on Facebook" />
          </li> -->
        </ul>
        <ul>
          <li>114 HIGH STREET CT14 6BB, DEAL, KENT</li>
          <li>
            <a href="tel:01304367707">
              <phoneIcon title="Phone us" /> 01304 367 707 (click/tap to phone)
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
import Face from "vue-material-design-icons/Facebook.vue";
import dishes from "../components/dishes";
import phoneIcon from "vue-material-design-icons/PhoneInTalk.vue";
export default {
  components: { phoneIcon, dishes, Face },
  data() {
    return {
      consent: false
    }
  },
  methods: {
    allow() {
      this.consent = true
    }
  }
};
</script>
