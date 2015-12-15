(function(global) {
  'use strict';
  global.Shapes = {
    VERSION:'0.0.1'
  };

Shapes.createShape =  function(attributes) {

    attributes = attributes || {};
    attributes.name = attributes.name || 0;
    attributes.nodes = attributes.nodes || new Array();

    var Shape ={};

    Shape.getName = function() {
      return attributes.name;
    };

    Shape.id = attributes._id;

    Shape.toSvgPath = function() {
      var myReturn = "";
      for(var cpt = 0; cpt < attributes.nodes.length; cpt++)
      myReturn += ((cpt == 0) ? "M " : " L ") + attributes.nodes[cpt].x + " " + attributes.nodes[cpt].y;
      return myReturn;
    };

    Shape.toString = function() {
      return '(id : ' + this.id + " | name : " + attributes.name + ')';
    };


    return Shape;
  }

Shapes.createRoad = function(attributes) {
    attributes = attributes || {};
    attributes.category = attributes.highway || 0;

    var road = Shapes.createShape(attributes);

    road.getCategory = function() {
      return attributes.category;
    }

    return road;
}

Shapes.createAmenity = function(attributes) {
    attributes = attributes || {} ;
    attributes.amenity = attributes.amenity || 0;
    var amenity = Shapes.createShape(attributes);

    amenity.getType = function() {
      return attributes.amenity;
    }

    return amenity;
}

Shapes.createBuilding = function(attributes) {
    attributes = attributes || {};
    attributes.building = attributes.building || {};

    var building = Shapes.createShape(attributes);
    building.getArea = function() {

      var myArea = 0;
      for (var i= 0; i<attributes.nodes.length; i++)
      {
        var j = (i + 1 ==attributes.nodes.length) ? 0 : (i+1);
        myArea += ((attributes.nodes[i].x)*(attributes.nodes[j].y)-(attributes.nodes[j].x)*(attributes.nodes[i].y))
      }
      /*myArea = ((attributes.nodes[0].x)*(attributes.nodes[1].y)-(attributes.nodes[1].x)*(attributes.nodes[0].y))+
      ((attributes.nodes[1].x)*(attributes.nodes[2].y)-(attributes.nodes[2].x)*(attributes.nodes[1].y))+
      ((attributes.nodes[2].x)*(attributes.nodes[3].y)-(attributes.nodes[3].x)*(attributes.nodes[2].y))+
      ((attributes.nodes[3].x)*(attributes.nodes[4].y)-(attributes.nodes[4].x)*(attributes.nodes[3].y))+
      ((attributes.nodes[4].x)*(attributes.nodes[0].y)-(attributes.nodes[0].x)*(attributes.nodes[4].y));*/

      return (myArea/2);
    }
    return building;
}

Shapes.createNatural = function(attributes) {
  attributes = attributes || {};
  attributes.natural = attributes.natural || 0;

  var natural = Shapes.createShape(attributes);
  natural.getType = function() {
    return attributes.natural;
  }
  return natural;

}

}(this));
