<template>
  <div class="forecast__item">
    <div>{{ time }}</div>
    <i :class="iconClass"></i>
    <!--
    <div>{{ weathersymbol3  }}</div>
    -->
    <span class="temperature">{{ temperature.toFixed(0) }}°C</span>
  </div>
</template>

<script>

const symbolToClass = (symbol) => {
  const symbolId = parseInt(symbol, 10);
  switch (symbolId) {
    case 1: return 'wi-day-sunny';  // selkeää
    case 2: return 'wi-day-cloudy';      // puolipilvistä
    case 21: return 'wi-day-sprinkle';     // heikkoja sadekuuroja
    case 22: return 'wi-day-showers';     // sadekuuroja
    case 23: return 'wi-day-rain';     // voimakkaita sadekuuroja
    case 3: return 'wi-day-cloudy';      // pilvistä
    case 31: return 'wi-day-sprinkle';     // heikkoa vesisadetta
    case 32: return 'wi-day-rain';     // vesisadetta
    case 33: return 'wi-day-rain';     // voimakasta vesisadetta
    case 41: return 'wi-snow';     // heikkoja lumikuuroja
    case 42: return 'wi-snow';     // lumikuuroja
    case 43: return 'wi-snow';     // voimakkaita lumikuuroja
    case 51: return 'wi-snow';     // heikkoa lumisadetta
    case 52: return 'wi-snow';     // lumisadetta
    case 53: return 'wi-snow';     // voimakasta lumisadetta
    case 61: return 'wi-storm-showers';     // ukkoskuuroja
    case 62: return 'wi-storm-showers';     // voimakkaita ukkoskuuroja
    case 63: return 'wi-thunderstorm';     // ukkosta
    case 64: return 'wi-thunderstorm';     // voimakasta ukkosta
    case 71: return 'wi-day-sleet';     // heikkoja räntäkuuroja
    case 72: return 'wi-day-sleet';     // räntäkuuroja
    case 73: return 'wi-day-sleet';     // voimakkaita räntäkuuroja
    case 81: return 'wi-day-sleet';     // heikkoa räntäsadetta
    case 82: return 'wi-day-sleet';     // räntäsadetta
    case 83: return 'wi-day-sleet';     // voimakasta räntäsadetta
    case 91: return 'wi-day-haze';     // utua
    case 92: return 'wi-day-fog';     // sumua
    default: return 'wi-alien';
  }
};

export default {
  name: 'forecast-item',
  props: {
    temperature: {
      type: Number,
      required: true,
    },
    weathersymbol3: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      msg: 'Sunny',
    };
  },
  computed: {
    iconClass() {
      return `wi ${symbolToClass(this.weathersymbol3)}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.forecast__item {
  background-color: #329A7D;
  color: #FFFFFF;
}

h1, h2 {
  font-weight: normal;
}
.forecast__item {
  flex: 1;
  padding: 5px;
  margin: 10px;

  opacity: 0.8;
}
i {
  font-size: 50px;
  margin-bottom: 30px;
  margin-top: 20px;
  color: #FFFFFF;
  width: 100%;
}
.temperature {
  font-weight: bold;
  //opacity: 1;
}
</style>
