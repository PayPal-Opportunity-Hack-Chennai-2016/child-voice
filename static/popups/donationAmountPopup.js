var app = angular.module("childVoiceApp");
app.controller("donationAmountFormController",["$scope","$mdDialog","data",function($scope,$mdDialog,parameters){
    
    $scope.defaultDonations = [10,20,50]
    $scope.selectedDonation = 10
    
    $scope.init = function(){    
        $scope.parameters = parameters
        if(parameters.mode == 'edit'){
            $scope.formTitle = "Edit Donation Amount";                    
        }
        else if(parameters.mode == 'add'){
            $scope.formTitle = "New Donation";           
               
        }
    }
    $scope.submit = function(isValid) {
        if (isValid) {
            if($scope.selectedDonation == 'custom'){
                amount = $scope.customAmount
            }
            else{
                amount = $scope.selectedDonation
            }
            $scope.submitAmount(amount);           
        }
    };
    $scope.cancel = function() { 
        $scope.cancelDialog(); 
    };        
    
    $scope.submitAmount = function(amount) {
            if (parameters.mode == 'add') {
                
                $scope.resolveDialog({'amount':amount,'cause':$scope.parameters.cause});
                
            }
            else if (parameters.mode == 'edit') {
                
            }
    };
    $scope.resolveDialog = function(data) {
       $mdDialog.hide(data);
    
    };
    $scope.cancelDialog = function() {
        $mdDialog.cancel();
    };          
    
    
    $scope.init();
}]);
