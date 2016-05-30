/**
 * Created by cjpowers on 5/30/16.
 */
angular.module('rainingCatzAndDogz').controller('catCtrl', function($scope, $stateParams, catServ, $state){
    $scope.Cat = '';
    $scope.catz = catServ.allCats;
    //$scope.checkCatz = function(){
        //console.log($stateParams.id);
    if($stateParams.id) {
        for (var i = 0; i < $scope.catz.length; i++) {
            if ($stateParams.id === $scope.catz[i].breed) {
                $scope.Cat = $scope.catz[i];
            }
        }
        console.log($scope.Cat);
    }

    //}
});