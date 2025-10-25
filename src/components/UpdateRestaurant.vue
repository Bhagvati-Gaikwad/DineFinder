<template>
  <Header />
  <div>
    <h1>Hello {{userName}}, Welcome to Update Restaurant Page</h1>
    <form class="add">
      <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
      <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address" />
      <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact" />
      <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
  </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
  name: 'UpdateRestaurant',
  components: {
    Header
  },
  data() {
    return {
      userName: '',
      restaurant: {
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  methods: {
    async updateRestaurant() {
      console.warn(this.restaurant);
      const id = this.$route.params.id;
      const result = await axios.put(`http://localhost:3000/restaurant/${id}`, {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact
      });
      if(result.status == 200) {
        this.$router.push({ name: 'Home' });
      }
      
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'SignUp' });
      return;
    }
    const id = this.$route.params.id;
    try {
      const result = await axios.get(`http://localhost:3000/restaurant/${id}`);
      this.restaurant = result.data;
      console.warn(result);
    } catch (error) {
      console.error("Failed to fetch restaurant:", error);
      // Optionally handle error here (show message, redirect, etc.)
    }
  }
}
</script>
