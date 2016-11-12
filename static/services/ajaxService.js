angular.module("childVoiceApp").service("ajaxService",["$q","$http",function($q,$http){
    this.apiUrl = "http://192.168.124.115:8081/api";
    this.getDonationCauseList = function(){
        var deferred = $q.defer();
        $http.get(this.apiUrl+"/get_donation_causes").then(
            function(res){
                console.log(res)
                deferred.resolve(res.data)
            },
            function(err){
                console.error(err)
                deferred.reject(err)
            }
        )
        return deferred.promise
    }
    
    this.addDonationToCause = function(){
        var deferred = $q.defer();
        $http.post("/addDonationToCause").then(
            function(res){
                console.log(res)
                deferred.resolve(res)
            },
            function(err){
                console.error(err)
                deferred.reject(err)
            }
        )
        return deferred.promise
        
    }
    
    
}]);