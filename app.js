(function(){
  'use strict'
  var app=angular.module('myApp',[]);
  app.controller('myCtrl',function($scope){
        $scope.name="";
        $scope.charValue=0;
        $scope.CalculateValue=function(){
          var totalValue=charValueCalculator($scope.name);
          $scope.charValue=totalValue;
        
        }

        function charValueCalculator(string){
          var num=0;
          for(var i=0;i<string.length;i++){
            num += string.charCodeAt(i);
          }
          return num;
        }
  });
})()