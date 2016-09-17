angular.module('App',['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {
  var tabone = {
    name: 'tabone',
    url: '/tabone',
    templateUrl: '../../templates/tabone.html'
  }

  var tabtwo = {
    name: 'tabtwo',
    url: '/tabtwo',
    templateUrl: '../../templates/tabtwo.html'
  }

  var tabthree = {
    name: 'tabthree',
    url: '/tabthree',
    templateUrl: '../../templates/tabthree.html'
  }

    var tabfour = {
      name: 'tabfour',
      url: '/tabfour',
      templateUrl: '../../templates/tabfour.html'
    }
      var credit = {
        name: 'credit',
        url: '/credit',
        templateUrl: '../../templates/credit.html'
      }
      var bankacc = {
        name: 'bankacc',
        url: '/bankacc',
        templateUrl: '../../templates/bankacc.html'
      }
      var check = {
        name: 'check',
        url: '/check',
        templateUrl: '../../templates/check.html'
      }

  $stateProvider.state(tabone);
  $stateProvider.state(tabtwo);
  $stateProvider.state(tabthree);
  $stateProvider.state(tabfour);
  $stateProvider.state(credit);
  $stateProvider.state(bankacc);
  $stateProvider.state(check);
  $urlRouterProvider.otherwise('/tabone')
})
.controller('mainController',function($scope,$state){
    $scope.mainmenuactive=true;
    $scope.submenuactive=false;
    $scope.pay=function(){
      $scope.mainmenuactive=false;
      $scope.submenuactive=true;
      $state.go('credit');
    }
    $scope.payclose=function(){
      $scope.mainmenuactive=true;
      $scope.submenuactive=false;
      $state.go('tabone');
    }
});
