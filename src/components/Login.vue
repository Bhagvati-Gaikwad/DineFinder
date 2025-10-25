<template>
  <img class="logo" src="../assets/df.png"/>
  <h1>Login</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="login">Login</button>
    <p>
      Don't have an account? <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LogIn',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      // ✅ GET request to find user by email
      let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
      
      if(result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({name:'Home'})
      } else {
        alert("Invalid credentials! Please try again.");
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if(user) {
      this.$router.push({name:'Home'})
    }
  }
}
</script>
