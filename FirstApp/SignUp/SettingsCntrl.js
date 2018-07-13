window.angular.module('nuWireApp.SignUp').controller('SettingsCntrl', [
    '$scope', '$state',
    function ($scope, $state) {
    	
    	$scope.goToSettings=function(){
    		
			$state.go("Settings");
    	};	
    	
    	
    }]);
