// Generated by CoffeeScript 1.7.1
(function() {
  var NavigationCtrl;

  angular.module('BookStore').controller('NavigationCtrl', NavigationCtrl = (function() {
    NavigationCtrl.$inject = ['Auth'];

    function NavigationCtrl(Auth) {
      this.Auth = Auth;
    }

    NavigationCtrl.prototype.logout = function() {
      return this.Auth.logout();
    };

    return NavigationCtrl;

  })());

}).call(this);
