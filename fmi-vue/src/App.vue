<template>
  Location: {{ location }}
  <div id="app">
    <div v-if="location === ''">
      <button  v-on:click="search">Go</button>
    </div>
    <headerBar v-if="location !== ''" :location="location"></headerBar>
    <weatherInfo v-if="location !== ''" :location="location"></weatherInfo>
    <forecast v-if="location !== ''" :location="location"></forecast>
  </div>
</template>


<script>
import HeaderBar from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import Forecast from './components/Forecast';
import '../css/weather-icons.css';

export default {
  name: 'app',
  data() {
    return {
      location: window.location.pathname.split('/').pop(),
    };
  },
  components: {
    Forecast,
    HeaderBar,
    WeatherInfo,
  },
  methods: {
    search() {
      console.log('Click');
      window.history.pushState('suinula', 'Title', '/suinula');
      this.locationUpdated = new Date();
      this.location = 'suinula';
      // window.location.pathname = '/suinula';
    },
  },
};
</script>

<style>
#app {
  font-family: 'Muli', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
body {
  background-image: url('https://static.pexels.com/photos/6718/mountains-clouds-forest-trees.jpg');
}
</style>
