var app = new Vue({
  el: "#app",
  data: {
    title: "Becoming a vue ninja",
    name: "Ben Kissi",
    url: "https://youtube.com",
    classes: ["one", "two"],
    wage: 10,
    coords: {
      x: 0,
      y: 0
    }
  },
  methods: {
    greet: function(time) {
      return `Hello and good ${time}, ${this.name}`;
    },
    changeWage: function(amount) {
      return (this.wage += amount);
    },
    logEvent: function(e) {
      console.log(e);
    },
    logCoords: function(e) {
      this.coords.x = e.offsetX;
      this.coords.y = e.offsetY;
    },
    updateName: function(e) {
      this.name = e.target.value;
    },
    logMessage: function(e){
      console.log("Hello world")
    }
  }
});
