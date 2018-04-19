// Namespace our flowerApp
var app = app || {};

app.Router = Backbone.Router.extend({

routes :{
	"": "noCopy",
	"roseFlower" : "roseFlowerMessage",
	"jasmineFlower": "JasmineFlowerMessage",
	"sevvanthiFlower" : "SevvanthiFlowerMessage"
},

noCopy: function() {
  $("#copy").html("");
},

roseFlowerMessage: function() {
  $("#copy").html("Roses are great Mother's Day flowers");
},

JasmineFlowerMessage: function() {
  $("#copy").html("Choose Jasmine flowers for your wedding");
},

SevvanthiFlowerMessage: function() {
  $("#copy").html("On festival time, Do Pooja With Sevvanthi flowers");
}

});


