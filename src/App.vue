<template>
  <div id="app">
    <nav>
      <a href='#/index'>Home</a>
      <a href='#/travel'>Travel</a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
nav {
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid lightgray;
}
a {
    color: #F0972D;
    text-decoration: none;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    margin-left: 25px;
  }
</style>
