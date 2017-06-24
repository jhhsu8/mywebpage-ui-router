'use strict';
var routerApp = angular.module('routerApp');

//define a service called foodFactory 
routerApp.service('foodFactory', function() {
  var foods = [{
      name: 'Kung Pao Chicken',
      description: 'A stir-fry Chinese dish made with chicken, peanuts, vegetables, and chili peppers.',
      category: 'main',
      image: 'http://i.imgur.com/4oSl0yW.jpg'
    }, {
      name: 'Vegetarian Curry',
      description: 'An India dish made with complex combinations of spices, herbs, and hot chillies.',
      category: 'main',
      image: 'http://i.imgur.com/YcbwFzi.jpg'

    }, {
      name: 'Tacos',
      description: 'A traditional Mexican dish made with a wheat tortilla folded around a meaty filling.',
      category: 'main',
      image: 'http://i.imgur.com/idoBuhA.jpg'

    }, {
      name: 'Salad',
      description: 'A dish consisting of a mixture of lettuce, tomatoes, cumumbers, and radishes.',
      category: 'appetizer',
      image: 'http://i.imgur.com/FSqSqF1.jpg'
    }, {
      name: 'Mini Burgers',
      description: 'Small hamburgers!',
      category: 'appetizer',
      image: 'http://i.imgur.com/SeJUbPf.png'
    }, {
      name: 'Fruits',
      description: 'Apples, mangoes, oranges, strawberries, bananas, cantaloupes',
      category: 'dessert',
      image: 'http://i.imgur.com/6k4bVoR.jpg'
    }, {
      name: 'Donuts',
      description: 'Chocolates, glazed, sugar-powered, strawberry-frosted',
      category: 'dessert',
      image: 'http://i.imgur.com/NXshhPF.jpg'
    }

  ];

  //implement the function called getFoods
  this.getFoods = function() {
    return foods;
  };
})

//define a service called photoFactory 
.service('photoFactory', function() {

  var photos = [{

      name: "Yellowstone",
      image: "http://i.imgur.com/lbXilIQ.jpg"
    }, {

      name: "Yosemite",
      image: "http://i.imgur.com/9KLIO9C.jpg"

    }, {

      name: "Seattle",
      image: "http://i.imgur.com/DYjXabA.jpg"

    }, {

      name: "Snow Lake",
      image: "http://i.imgur.com/M8D0j0T.jpg"
    }, {

      name: "San Francisco",
      image: "http://i.imgur.com/fTmx2Vz.jpg"
    }

  ];

  // implement two functions, getPhotos and getPhoto(index)
  this.getPhotos = function() {
    return photos;
  };
  this.getPhoto = function(index) {
    return photos[index];
  };
});