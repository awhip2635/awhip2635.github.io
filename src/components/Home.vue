<template>
<div class="container-fluid">
  <div class="title">
    <h1>Alex Whipple</h1>
    <h2>Full Stack Web Developer</h2>
  </div>
  <div class="options">
      <router-link :to="{name: 'Bio'}">
    <h2>Bio</h2>
    </router-link>
    <router-link :to="{name: 'Portfolio'}">
    <h2>Portfolio</h2>
    </router-link>
    <router-link :to="{name: 'Contact'}">
    <h2>Contact</h2>
    </router-link>
  </div>

</div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-top: 90px;
  color: white;
}

.options {
  margin-top: 90px;
  
}
h2 {
  color: white;
}
</style>
