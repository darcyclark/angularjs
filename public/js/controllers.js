// Controllers

c = angular.module('myApp.controllers', [])

// page 1

c.controller('SimpleForm', SimpleForm);

function SimpleForm($scope) {
  $scope.data = {text: "amanap lanac a nalp a nam a"};
  $scope.reverseMessage = function(message) {
    return message.split("").reverse().join("");
  };
}

// page 2

c.controller('ComplexForm', ComplexForm);

function ComplexForm($scope) {
  $scope.phones = [
    {"name": "Nexus S",
       "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola XOOM™ with Wi-Fi",
       "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM™",
       "snippet": "The Next, Next Generation tablet."},
    {"name": "iPhone 5",
       "snippet": "slick phone from Apple"},
    {"name": "Samsung Galaxy S4",
       "snippet": "new fancy Android phone"},
    {"name": "Nokia E71",
       "snippet": "old timers phone"},
    {"name": "LG a45",
       "snippet": "piece of crap"},
  ];
  $scope.addPhone = function () {
    $scope.phones.push(
      { 
        name: $scope.newPhone.name, 
        snippet: $scope.newPhone.snippet 
      }
    )
  }
}

c.controller('Resource', Resource);

function Resource($scope, MediaService) {
  $scope.searchTerm = "Foxy";
  $scope.mediaType = "movie";
  $scope.filterTerm = "";
  $scope.sortProp = "artistName";
  $scope.showFlag = false;

  var type = $scope.mediaType;
  MediaService.get({term:$scope.searchTerm, entity:$scope.mediaType, limit:10},function(response){
    $scope.mediaResults = response.results;
  });
  $scope.doSearch = function () {
    var type = $scope.mediaType;
    if ($scope.mediaType=="all")  type="";
    MediaService.get({term:$scope.searchTerm, entity:$scope.mediaType, limit:10},function(response){
      $scope.mediaResults = response.results;
    });
  }
}

c.controller('Deployd', Deployd);
function Deployd($scope, WidgetService) {
  var resetForm = function () {
    $scope.searchTerm = undefined;
    $scope.name = undefined;
    $scope.description = undefined;
    $scope.widgets = WidgetService.query();
  }
  $scope.widgets = WidgetService.query();
  $scope.reset = function () {
    resetForm();
  }
  $scope.doSearch = function () {
    WidgetService.get({name:$scope.searchTerm},function(response){
      $scope.widgets = response;
    });
  }
  $scope.addWidget = function () {
    WidgetService.save({name:$scope.name,description:$scope.description},function(){
      $scope.widgets = WidgetService.query();
      resetForm();
    });
  }
  $scope.deleteWidget = function (id) {
    WidgetService.delete({id:id},function(){
      $scope.widgets = WidgetService.query();
      resetForm();
    });
  }
}