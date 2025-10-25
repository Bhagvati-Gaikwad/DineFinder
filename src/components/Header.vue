<template>
  <div class="header">
    <div class="nav-container">
      <div class="logo">
        <h2>Dine Finder</h2>
      </div>
      <nav class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/add" class="nav-link">Add Restaurant</router-link>
        <a href="#" @click.prevent="logout" class="nav-link logout">Logout</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    logout() {
      localStorage.removeItem('user-info');
      this.$router.push({name:'SignUp'})
    }
  }
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
}

.logo h2 {
  margin: 0;
  color: white;
  padding: 10px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  gap: 15px;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  cursor: pointer;
}

.nav-link:hover,
.router-link-exact-active {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.nav-link.logout {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  font-weight: 600;
}

.nav-link.logout:hover {
  background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
  box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 15px;
    padding: 15px 20px;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .nav-link {
    padding: 8px 15px;
    font-size: 14px;
  }

  .logo h2 {
    font-size: 20px;
  }
}
</style>
