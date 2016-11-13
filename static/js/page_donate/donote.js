var myApp = angular.module('childVoiceApp',['ngMaterial']);

myApp.controller('donateController', ['$scope','ajaxService','$mdDialog', function($scope,ajaxService,$mdDialog) {
  
  
  $scope.init = function(){
        $scope.emailAddress = 'your@email.com';
        $scope.firstName = 'first';
        $scope.lastName = 'last';
        $scope.hide=false;
        $scope.total=0;
        $scope.donatedCauses = []
        $scope.getDonationCauseList()
  }
  
  $scope.donateNow = function(){
      
  }
  
  $scope.donateNowClicked = function(cause){
      template = 'popups/donationAmountPopup.html'
      controller = 'donationAmountFormController'
      data = {"mode":"add","cause":cause}
      UtilsModule.window.openWindow($mdDialog,template,controller,data).then(
        function(res){
            console.log('donation success');
            $scope.donatedCauses.push({
                'id':res.cause.id,
                'amount':res.amount,
                'heading':res.cause.heading,
                "image":"checkout-img.png",
                })
        },
        function(err){
            console.log('donation cancelled');
        }
      )
      
  }
  
  $scope.getDonationCauseList = function(){
        ajaxService.getDonationCauseList().then(
            function(res){
                console.log(res.data);
                $scope.causes = res.data
            },
            function(err){
                console.log("Request error")
            }
        )
  }
  
  $scope.deleteDonationClicked = function(index){
        console.log('delete donation index '+index);
        $scope.donatedCauses.splice(index,1)
      
  }
  
  $scope.donatedCauses1 = [
    {
        "heading":"GIVE EDUCATION TO CHILDRENS",
        "image":"checkout-img.png",
        "amount":10        
    },
    {
        "heading":"HELP SENIOR CITIZENS",
        "image":"checkout-img.png",
        "amount":10        
    }
  ];
  $scope.causes1 = [
    {
        "id":1,
        "heading":"GIVE EDUCATION TO CHILDRENS",
        "description":"PHASELLUS IN EGESTAS LIBERO, ET CONGUE LACUS. CRAS VEL LACUS NISI. DUIS NULLA METUS, TINCIDUNT AT TORTOR.",
        "raisedAmount":65360,
        "goal":124500,
        'images':["cause01.jpg","cause02.jpg"]
    },
    {
        "id":2,
        "heading":"HELP SENIOR CITIZENS",
        "description":"PHASELLUS IN EGESTAS LIBERO, ET CONGUE LACUS. CRAS VEL LACUS NISI. DUIS NULLA METUS, TINCIDUNT AT TORTOR.",
        "raisedAmount":65360,
        "goal":124500,
        'images':["cause02.jpg"]
    },
    {
        "id":3,
        "heading":"HELP US PRINTING 100 T-SHIRTS",
        "description":"PHASELLUS IN EGESTAS LIBERO, ET CONGUE LACUS. CRAS VEL LACUS NISI. DUIS NULLA METUS, TINCIDUNT AT TORTOR.",
        "raisedAmount":65360,
        "goal":124500,
        'images':["cause03.jpg"]
    }
  ];
  
  $scope.init();
}]);