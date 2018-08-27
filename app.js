(function () {
'use strict';

angular.module('RefreshText', [])
.controller('Refresh', Refresh)
.service('Service1', Service1);

//Refresh1.$inject = ['Service1'];
function Refresh($scope, Service1) {
  var refresh = this;
  window.MY_SCOPE = refresh;
  window.listScope = $scope;

 refresh.addText = function () {
    var temp = Service1.addText (refresh.texto, refresh.addtext);
    // $scope.totaltext = temp;
  };

  // $scope.totaltext = Service1.getText();
  
  refresh.refreshText = function () {
    refresh.totaltext = Service1.getText();
    refresh.Integer = Service1.getInteger();
    refresh.String = Service1.getString();
    refresh.Array = Service1.getArray();

  };

  refresh.Integer = Service1.getInteger();
  refresh.String = Service1.getString();
  refresh.Array = Service1.getArray();

  refresh.addOne = function () {
    Service1.sumaOne();
  };

  
}

// angular.module('RefreshText', [])
// .controller('Refresh', Refresh);

// //DIController.$inject = ['$scope', '$filter'];
// function Refresh($scope) {
//   // $scope.name = "Yaakov";

//   // $scope.upper = function () {
//   //   var upCase = $filter('uppercase');
//   //   $scope.name = upCase($scope.name);
//   // };

//   $scope.addText = function () {
//     $scope.totaltext = ($scope.texto + $scope.addtext);
//   };
// }

// Service1.$inject = [];
function Service1() {
  var service = this;
  window.ServiceScope = service;

  var text3;
  var varInteger = 1;
  var varString = "a";
  var varArray = [];
  varArray[0] = 1;
  // List of shopping items
 

  service.addText = function (text1, text2) {
    text3 = text1 + text2;
    return text3;
    
  };

  service.getText = function () {
    return text3;
  };

  service.getInteger = function () {
    return varInteger;
  };

  service.getString = function () {
    return varString;
  };

  service.getArray = function () {
    return varArray;
  };



  service.sumaOne = function () {
    varInteger++;
    varString = varString + "a";
    varArray[0]++;
  };
}



})();
