angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // Family functions
    $scope.addFamilyMember = addFamilyMember;
    $scope.editFamilyMember = editFamilyMember;
    $scope.deleteFamilyMember = deleteFamilyMember;
    $scope.payFamilyMember = payFamilyMember;
    var addFamilyMember = function(){}
    var editFamilyMember = function(){}
    var deleteFamilyMember = function(){}
    var payFamilyMember = function(){}
    
    
    // Chore functions
    $scope.startAddChore  = startAddChore;
    $scope.cancelChoreWork = cancelChoreWork;
    $scope.addChore = addChore;
    $scope.startEdit = startEditChore;
    $scope.saveChore = saveChore;
    $scope.startRemove = startRemoveChore;
    $scope.removeChore = removeChore;
    $scope.claimChore = claimChore;
    $scope.startUnclaimChore = startUnclaimChore;
    $scope.unclaimChore = unclaimChore;
    $scope.assignChore = assignChore;
    var startAddChore = function() {}
    var cancelChoreWork = function(){}
    var addChore = function() {}
    var startEditChore = function() {}
    var saveChore = function() {}
    var startRemoveChore = function() {}
    var removeChore = function() {}
    var claimChore = function() {}
    var startUnclaimChore = function() {}
    var unclaimChore = function() {}
    var assignChore = function() {}

    // Goal functions
    $scope.startAddGoal = startAddGoal;
    $scope.addGoal = addGoal;
    $scope.cancelGoalWork = cancelGoalWork;
    $scope.addGoal = addGoal;
    $scope.startEditGoal = startEditGoal;
    $scope.saveGoal= saveGoal;
    $scope.startRemoveGoal = startRemoveGoal;
    $scope.removeGoal = removeGoal;
    var startAddGoal = function() {}
    var addGoal = function() {}
    var cancelGoalWork = function() {}
    var addGoal = function() {}
    var startEditGoal = function() {}
    var saveGoal = function() {}
    var startRemoveGoal = function() {}
    var removeGoal = function() {}

    

    
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
