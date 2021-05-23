<template>
  <div class="anti-spam">
    <h3>Anti-spam</h3>
    <div class="sum">
      <p>
        find this arrow 
        <span class="nos" v-html="no1"></span> below and click on it
        <!-- <span class="nos">&#x2b;</span> -->
        <!-- <span class="nos" v-html="no2"></span> -->
        <!-- <span class="nos">&#x3d;</span> -->
      </p>
      <p>
        <span
          :id="'n' + c.d"
          @click="check(c.d)"
          class="choices"
          v-for="(c, index) in randomChoices"
          :key="index"
          v-html="c.n"
        ></span>
      </p>
    </div>
    <p v-html="guess"></p>
  </div>
</template>

<script>
import sym from "../../functions/arrows";
export default {
  props: ["result"],
  data() {
    return {
      no1: "",
      no2: "",
      sum: "",
      guess: "",
      choices: []
    };
  },
  computed: {
    test() {},
    randomChoices() {
      return this.choices.sort(function() {
        return .5 - Math.random();
      })
    }
  },
  methods: {
    check(val) {
      let el = "n" + val;
      if (val == this.sum) {
        document.getElementById(el).style.color = "green";
        this.guess = "<center>Human verified...</center>";
        setTimeout(() => {
          this.$emit("updateResult", "verified");
        }, 1500);
      } else {
        document.getElementById(el).style.color = "red";
      }
    },
    assign() {
      this.choices.forEach(c => {
        if (c.d == this.no1) {
          this.no1 = c.n;
        }
      });
      this.choices.forEach(c => {
        if (c.d == this.no2) {
          this.no2 = c.n;
        }
      });
    }
  },
  mounted() {
    this.no1 = Math.floor(Math.random() * 10 +1);
    // this.no2 = Math.floor(Math.random() * 5 +1);
    this.sum = this.no1 + this.no2;
    this.choices = sym.choice;
    this.assign();
  }
};
</script>
<style lang="scss" scoped>
.anti-spam {
  // color: #5e5b5b;
  width: 80%;
  margin: 7px auto;
  display: flex;
  background-color: rgb(236, 234, 234);
  flex-direction: column;
  border-radius: 5px;
  padding: 3px;
  h3 {
    text-align: center;
    border-bottom: 1px solid rgb(180, 180, 180);
    font-weight: normal;
    font-size: 0.9rem;
    padding: 3px;
  }
  .sum {
    //   padding: 3px;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    text-align: center;
    border: 1px solid rgb(206, 205, 205);
    color: #4e4e50;
    //   padding: 7px;
    * {
      padding: 7px;
    }
    p:first-child {
      border-bottom: 1px dotted #c2c1c1;
    }
    .nos {
      font-size: 2rem;
      display: inline-block;
    }
    .choices {
      color: #7a7a7a;
      display: inline-block;
      font-size: 2em;
      cursor: pointer;
      &:hover {
        color: #4e4e50;
      }
    }
  }
}
</style>
