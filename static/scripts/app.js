var app = angular.module('childVoiceApp',[]);
app.controller("mainCtrl",["$scope",function($scope){
    
    $scope.init = function(){
        console.log('main controller init');
        
    }
    
    
    $scope.init();
}]);