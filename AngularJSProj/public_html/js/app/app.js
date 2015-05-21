
(function(){
    var app = angular.module('CollectiveTodos', []);
    var now = new Date();
    
    var todos = [
        {
            titre:'Préparer la salle de formation',
            date:'2015-05-16',
            description:'Installer les poster, régler le rétroprojecteur et vider la poubelle.',
            importance:1,
            realisee:false,
            commentaires:[
                {
                    auteur:'ericguyader@yahoo.fr',
                    date:'2015-05-16',
                    message:'Tâche de la plus haute importance et à ne confier qu\'à des personnes qualifiées !'
                },
                {
                    auteur:'pauldurand@yahoo.fr',
                    date:'2015-05-17',
                    message:'+1!'
                },
                {
                    auteur:'marcopaulo@discover.net',
                    date:'2015-05-18',
                    message:'Je peux m\'en charger...'
                }
            ]
        },
        {
            titre:'Trouver un formateur pour le stage "Regular.JS"',
            date:'2015-05-19',
            description:'Je pensais avoir trouvé quelqu\'un mais en fait... non...',
            importance:2,
            realisee:true,
            commentaires:[
                {
                    auteur:'pierrekiroule@nomousse.com',
                    date:'2015-05-19',
                    message:'Ne comptez pas sur moi !'
                },
                {
                    auteur:'pauldurand@yahoo.fr',
                    date:'2015-05-17',
                    message:'-1!'
                }
            ]
        },
        {
            titre:'Organiser l\'anniversaire de Martine',
            date:'2015-05-20',
            description:'Préparer la petite fête d\'anniversaire traditionnelle de Martine.',
            importance:3,
            realisee:false,
            commentaires:[
                {
                    auteur:'ericguyader@yahoo.fr',
                    date:'2015-05-20',
                    message:'J\'ai trouvé pour acheter de quoi boire !'
                },
                {
                    auteur:'pauldurand@yahoo.fr',
                    date:'2015-05-03',
                    message:'+10 :-)'
                }
            ]
        }
    ];
    
    //le ['$scope', est ajouter au cas ou on minififirait le script
    // afin que scope ne soit pas écrasé mais inutile si gardé en clair.
    app.controller('tachesController', ['$scope',function($scope){
        $scope.nostaches = todos;
        
        $scope.selectionTache = function(tache){
            $scope.detailsTache = tache;
            $scope.commentairesTab = tache.commentaires;
            
        };
        $scope.infoActif = true;
        $scope.selectionPanneau = function(infoActif){
            if (infoActif){
                $scope.infoActif = false;
                $scope.commActif = true;
            } else {
                $scope.infoActif = true;
                $scope.commActif = false;
            }
        };
        
        $scope.errorForm = false;
        
        $scope.nvComm = {date:now.toISOString()};
        $scope.ajouterCommentaire = function(){
            //console.log(' form: '+ $scope.frmAjoutCommentaire.$valid);
            
            if ($scope.frmAjoutCommentaire.$valid){
                $scope.detailsTache.commentaires.push($scope.nvComm);
                $scope.frmAjoutCommentaire.$setPristine(true);
                $scope.nvComm = null;
                $scope.nvComm = {date:now.toISOString()};
            }
            
            
        };
    }]);

    app.filter('importance', ['$sce', function($sce){
        $sce.trustAsHtml();
        return function(input,icones){
            icones = icones || false;
            if(!icones){
                switch(input){
                    case 1:
                        return 'Haute';
                    case 2:
                        return 'Moyenne';
                    case 3:
                        return 'Basse';
                    default:
                        return input;
                }
            }else{
                switch(input){
                    case 1:
                        return 'glyphicon glyphicon-thumbs-up text-danger';
                    case 2:
                        return 'glyphicon glyphicon-hand-right';
                    case 3:
                        return 'glyphicon glyphicon-thumbs-down text-success';
                    default:
                        return input;
                }
            }
        };
    }]);
})();


