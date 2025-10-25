<template>
  <Header />
  <div>
    <h1>Hello {{userName}}, Welcome to Home Page</h1>
    <table class="restaurant-table">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Actions</th>
      </tr>
      <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
          <router-link
            :to="'/update/' + item.id"
            class="action-link"
          >
            Update
          </router-link>
          <button
            class="action-link action-delete"
            v-on:click="deleteRestaurant(item.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';

export default {
  name: 'HomePage',
  components: {
    Header
  },
  data() {
    return {
      userName: '',
      restaurant: [],
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('user-info');
      this.$router.push({ name: 'SignUp' });
    },
    deleteRestaurant(id) {
      axios.delete(`http://localhost:3000/restaurant/${id}`)
        .then(() => {
          // Refresh the restaurant list after delete
          this.restaurant = this.restaurant.filter(r => r.id !== id);
        })
        .catch(() => {
          // Optionally show an error message
        });
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'SignUp' });
    } else {
      this.userName = JSON.parse(user).name;
      axios.get("http://localhost:3000/restaurant")
        .then(res => {
          this.restaurant = res.data;
        })
        .catch(() => {
          // Optionally handle error
        });
    }
  }
}
</script>

<style>
.restaurant-table {
  width: 80%;
  margin: 30px auto;
  border-collapse: collapse;
  box-shadow: 0 2px 15px rgba(64,64,64,0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  background: #fff;
}
.restaurant-table th,
.restaurant-table td {
  padding: 12px 20px;
  border: 1px solid #d3d3d3;
  text-align: left;
}
.restaurant-table th {
  background-color: #4CAF50;
  color: #fff;
  letter-spacing: 0.08em;
}
.restaurant-table tr:nth-child(even) {
  background-color: #f2f2f2;
}
.restaurant-table tr:hover {
  background-color: #e1f2fb;
  transition: background 0.2s;
}
.action-link {
  display: inline-block;
  padding: 6px 17px;
  margin-right: 8px;
  background: #1976d2;
  color: #fff !important;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  letter-spacing: 0.03em;
  transition: background 0.18s, color 0.18s;
}
.action-link:hover {
  background: #1250a7;
  color: #eaf6ff !important;
}
.action-delete {
  background: #e53935;
  color: #fff !important;
  margin-right: 0;
}
.action-delete:hover {
  background: #ab000d;
}
h1 {
  margin-top: 25px;
  font-size: 2em;
  font-weight: 600;
  text-align: center;
  color: #333;
}
</style>
