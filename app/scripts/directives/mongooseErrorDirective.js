// Generated by CoffeeScript 1.7.1
(function() {
  angular.module('BookStore').directive('mongooseError', function() {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function(scope, elem, attr, ngModel) {
        return elem.on('keydown', function() {
          return ngModel.$setValidity('mongoose', true);
        });
      }
    };
  });

}).call(this);