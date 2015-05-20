(function (){
    var app = angular.module("MonAppli", []);
    
    /*
     * Controleurs 
     */
    app.controller('SalutationController', function(){
        //alert('OK');
        this.nom = 'toto';
    });
    
})();