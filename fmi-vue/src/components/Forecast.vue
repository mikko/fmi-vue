<template>
  <div class="forecast">
      <ForecastItem
      :temperature="forecastItem.temperature"
      :time="forecastItem.time"
      :weathersymbol3="forecastItem.weathersymbol3"
      v-for="forecastItem in forecastItems">
    </ForecastItem>
  </div>
</template>

<script>

import Moment from 'moment';
import ForecastItem from './ForecastItem';

export default {
  name: 'forecast',
  props: {
    location: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      forecastItems: [],
    };
  },
  components: {
    ForecastItem,
  },
  created() {
    this.$http.get(`http://0.0.0.0:9000/forecast/${this.location}`).then((response) => {
      this.forecastItems = JSON.parse(response.body)
        .filter((item, index) => index % 4 === 0)
        .map((item) => {
          const forecastPoint = item;
          // moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
          forecastPoint.time = new Moment(item.time).format('D.M. HH:mm');
          return item;
        });
    }, (response) => {
      console.log('Error', response);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.forecast {
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
