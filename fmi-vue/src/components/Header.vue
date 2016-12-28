<template>
  <div class="header">
    <h1>{{ location }}</h1>
  </div>
</template>

<script>
export default {
  name: 'header-bar',
  props: {
    location: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.header {
  padding-top: 20px;
  padding-bottom: 20px;
}

h1, h2 {
  font-weight: bold;
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-size: 70px;
  color: #FFFFFF;
}
.header {
  width: 100%;
  background-color: #329A7D;
  opacity: 0.8;
  margin-top: 40px;
}
</style>
