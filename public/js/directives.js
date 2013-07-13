// Directives

d = angular.module('myApp.directives', [])

// page 3

d.directive("enter", function() {
  return function (scope, element, attrs) {
    element.bind("mouseenter", function() {
      //console.log(scope);
      //console.log(element);
      //console.log(attrs);
      element.css('color','#FFCCFF');
      element.html('Oh yeah, feels good');
    })
  }
})

d.directive("leave", function() {
  return function (scope, element, attrs) {
    element.bind("mouseleave", function() {
      element.css('color','white');
      element.html('again!!!');
    })
  }
})
