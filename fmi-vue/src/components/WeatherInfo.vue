<template>
  <div class="weather-info">
    <div class="row">
      <div class="col">
        <div class="weather-stats-row time">{{ time }}</div>
        <i :class="iconClass"></i>
      </div>
      <div class="col">
        <div class="weather-stats">
          <div class="weather-stats-row temperature">
            <div class="property-wrapper">
              {{ temperature.toFixed(1) }}°C
            </div>
          </div>
          <div class="weather-stats-row humidity">
            <div class="property-wrapper">
              Humidity: {{ humidity }} %
            </div>
          </div>
          <div class="weather-stats-row pressure">
            <div class="property-wrapper">
              Pressure: {{ pressure }} hPa
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Moment from 'moment';

const symbolToClass = (symbol) => {
  switch (symbol) {
    case 1: return 'selkeää';
    case 2: return 'puolipilvistä';
    case 21: return 'heikkoja sadekuuroja';
    case 22: return 'sadekuuroja';
    case 23: return 'voimakkaita sadekuuroja';
    case 3: return 'pilvistä';
    case 31: return 'heikkoa vesisadetta';
    case 32: return 'vesisadetta';
    case 33: return 'voimakasta vesisadetta';
    case 41: return 'heikkoja lumikuuroja';
    case 42: return 'lumikuuroja';
    case 43: return 'voimakkaita lumikuuroja';
    case 51: return 'heikkoa lumisadetta';
    case 52: return 'lumisadetta';
    case 53: return 'voimakasta lumisadetta';
    case 61: return 'ukkoskuuroja';
    case 62: return 'voimakkaita ukkoskuuroja';
    case 63: return 'ukkosta';
    case 64: return 'voimakasta ukkosta';
    case 71: return 'heikkoja räntäkuuroja';
    case 72: return 'räntäkuuroja';
    case 73: return 'voimakkaita räntäkuuroja';
    case 81: return 'heikkoa räntäsadetta';
    case 82: return 'räntäsadetta';
    case 83: return 'voimakasta räntäsadetta';
    case 91: return 'utua';
    case 92: return 'sumua';
    default: return 'wi-alien';
  }
};

export default {
  name: 'weatherinfo',
  props: {
    location: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      symbol: 'Sunny',
      temperature: -1,
      humidity: 11,
      time: '2016-12-23T00:00:00Z',
      pressure: 123,
      iconClass: 'wi wi-alien',
    };
  },
  created() {
    this.time = new Moment(this.time).format('D.M. hh:mm');
    this.$http.get(`http://0.0.0.0:9000/observation/${this.location}`).then((response) => {
      const observationPoints = JSON.parse(response.body);
      const latestObservation = observationPoints.pop();
      this.temperature = latestObservation.temperature;
      this.humidity = latestObservation.rh;
      this.pressure = latestObservation.pressure;
      this.pressure = latestObservation.pressure;
      this.iconClass = `wi ${symbolToClass(latestObservation.weathersymbol3)}`;
      this.time = new Moment(latestObservation.time).format('D.M. HH:mm');
    }, () => {
      // console.log('Error', response);
    });
  },
  computed: {
    weatherClass() {
      return window.location.pathname.split('/').pop();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather-info {
  padding-top: 30px;
  margin-top: 70px;
  padding-bottom: 50px;
  background-color: #FFFFFF;
  opacity: 0.6;
  color: #000000;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.col {
  flex: 1;
}
.first-column {
  flex: 1;
  margin: 20px;
}
i {
  font-size: 200px;
  margin-top: 50px;
  color: #000000;
}
.property-box {
  margin-top: 30px;
  width: 40%;
}
.weather-stats {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.weather-stats-row {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
.value-wrapper {
  width: 100px;
  display: inline;
  text-align: right;
}
.time {
  font-size: 50px;
}
.temperature {
  font-size: 60px;
  font-weight: bold;
}
.property-wrapper {

}
.humidity {

}
.pressure {

}
</style>
