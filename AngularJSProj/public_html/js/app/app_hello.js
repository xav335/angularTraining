/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
    var app = angular.module(
            'MyApp',[]
            );
    /*
     * Contrôleurs
     */
    //angular.module('MyApp')
    // OU, plus simplement : 
    app.controller('SalutationController',function($scope){
       $scope.nom = 'Anonyme'; 
    });
}) ();
