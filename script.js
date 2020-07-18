(function(){
  'use strict';
  
  angular
    .module('commentsApp', [])
    .controller('CommentsController', CommentsController);
  
  CommentsController.$inject = ['$scope'];
  
 
  function CommentsController($scope) {
    var vm = this;
    
   
    vm.comment = {};

  
    vm.comments = [];

   
    vm.addComment = function() {
     
      vm.comment.avatarSrc = 'http://lorempixel.com/200/200/people/';

      
      vm.comment.date = Date.now();

      vm.comments.push( vm.comment );
      vm.comment = {};

      
      $scope.form.$setPristine();
    }

   
    vm.anonymousChanged = function(){
      if(vm.comment.anonymous)
        vm.comment.author = "";
    }
  }

})();