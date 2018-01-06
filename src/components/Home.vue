<template>
<div class="container-fluid">
  <div>
    <h1>Alex Whipple</h1>
    <h2>Full Stack Web Developer</h2>
  </div>
  <div>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
