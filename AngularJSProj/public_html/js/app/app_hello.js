(function (){
    var app = angular.module("ColectivTdos", []);
    
    /*
     * Controleurs 
     */
    var todos = [
        {
            titre:'Préparer la salle de formation',
            date:'2015-05-17',
            importance:1,
            realisee:false,
            commentaires:[
                {
                    auteur:'xavier@gonzalez.pm',
                    date:'2015-05-17',
                    commentaire:'Tache super simple'
                },
                {
                    auteur:'xav335@hotmail.com',
                    date:'2015-05-18',
                    commentaire:'c\'est pas tout à fait vrai ça !'
                },
                {
                    auteur:'xavier@gonzalez.pm',
                    date:'2015-05-17',
                    commentaire:'Mais si mais si'
                }
            ]
            
        },
         {
            titre:'Trouver une formation pour le stage',
            date:'2015-05-17',
            importance:3,
            realisee:false,
            commentaires:[
                {
                    auteur:'xavier@gonzalez.pm',
                    date:'2015-05-17',
                    commentaire:'Tache super à ne pas confier à des choukis'
                },
                {
                    auteur:'xav335@hotmail.com',
                    date:'2015-05-18',
                    commentaire:'je sui spas un chouki !'
                },
                {
                    auteur:'xavier@gonzalez.pm',
                    date:'2015-05-17',
                    commentaire:'Si ça je te le confirme !'
                }
            ]
            
        },
         {
            titre:'Trouver les transports necessaire',
            date:'2015-05-17',
            importance:2,
            realisee:false,
            commentaires:[
                {
                    auteur:'xavier@gonzalez.pm',
                    date:'2015-05-17',
                    commentaire:'Tache très compliquée'
                }
            ]
            
        }
        
    ];
    
    app.controller('TodosController', ['$scope', function($scope){
        //alert('OK');
        $scope.todos = todos;
    }]);
    
})();

