<template>
 <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.logo {
  width: 150px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* ✅ Fixed: Added comma instead of space */
.register input,
.login input,
.add input {
  width: 300px;
  height: 45px;
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid #87CEEB;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: #FAFAFA;
}

.register input:focus,
.login input:focus {
  outline: none;
  border-color: #4A90E2;
  box-shadow: 0 0 8px rgba(74, 144, 226, 0.3);
  background-color: white;
}

.register input::placeholder,
.login input::placeholder {
  color: #999;
  font-size: 14px;
}

/* ✅ Fixed: Added comma instead of space */
.register button,
.login button,
.add button {
  width: 320px;
  height: 45px;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: block;
  margin: 30px auto 0;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.register button:hover,
.login button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.register button:active,
.login button:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.4);
}

h1 {
  color: #333;
  font-size: 32px;
  margin: 20px 0;
  font-weight: 700;
}

p {
  margin-top: 20px;
  color: #666;
}

p a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

p a:hover {
  color: #764ba2;
}
</style>
