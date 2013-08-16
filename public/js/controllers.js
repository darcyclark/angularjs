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

c.controller('Firebase', ['$scope', 'angularFire',
  function Firebase($scope, angularFire) {
    var url = 'https://darcy-widgets.firebaseio.com/';
    var promise = angularFire(url, $scope, 'widgets', []);
    $scope.newWidget = {};
    promise.then(function() {
      startWatch($scope);
    });
    $scope.reset = function () { resetForm(); }
    var resetForm = function () {
      $scope.searchTerm = undefined;
      //$scope.widgets = WidgetService.query();
    }
  }
]);
 
function startWatch($scope) {
  $scope.add = function() {
    console.log($scope.newWidget);
    $scope.widgets.push($scope.newWidget);
    $scope.newWidget = '';
  }
  $scope.deleteWidget = function(widget) {
    $scope.widgets.splice($scope.widgets.indexOf(widget), 1);
  };
}

function Bootstrap($scope) {
  // Collapse
  $scope.isCollapsed = false;
  // Type ahead
  $scope.selected = undefined;
  $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
} 
