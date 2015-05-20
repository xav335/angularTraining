(function (){
    var app = angular.module("MonAppli", []);
    
    /*
     * Controleurs 
     */
    app.controller('SalutationController', function($scope){
        //alert('OK');
        $scope.nom = 'anonyme';
    });
    
})();