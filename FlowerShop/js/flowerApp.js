var roseFlower = new app.singleFlower({
  name: "RoseFlower",
  price: 39.95,
  color: "Red",
  img: "images/rose.jpg",
  link: "roseFlower"
});

var jasmineFlower = new app.singleFlower({
  name: "JasmineFlower",
  price: 29.95,
  color: "orange",
  img: "images/Jasmine.jpg",
  link: "jasmineFlower"
});

var sevvanthiFlower = new app.singleFlower({
  name: "SevannthiFlower",
  price: 19.95,
  img: "images/sevvanthi.jpg",
  link: "sevvanthiFlower"
});

var flowerGroup = new app.FlowersCollection([
  roseFlower, jasmineFlower, sevvanthiFlower
]);

var flowerGroupView = new app.allFlowersView({ collection: flowerGroup});

$("#allFlowers").html(flowerGroupView.render().el);

var flowerRouter = new app.Router();

Backbone.history.start();