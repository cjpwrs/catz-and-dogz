/**
 * Created by cjpowers on 5/30/16.
 */
angular.module('rainingCatzAndDogz').controller('dogCtrl', function($scope, $stateParams, dogServ){
    $scope.Dog = "";
    $scope.dogz = dogServ.allDogs;

    if($stateParams.id){
        for(var i = 0; i < $scope.dogz.length; i++){
            if($stateParams.id === $scope.dogz[i].breed){
                $scope.Dog = $scope.dogz[i];
            }
        }
    }
});