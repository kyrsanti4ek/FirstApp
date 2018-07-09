window.angular.module('nuWireApp.SignUp').controller('SignUpCntrl', [
    '$scope', '$state',
    function ($scope, $state) {
    	
    	$scope.signUp=function(){
    	
    	firebase.auth().createUserWithEmailAndPassword($scope.eMail, $scope.password).catch(function(error) {
  		
    		// Handle Errors here.
  		  var errorCode = error.code;
  		  var errorMessage = error.message;
  		 alert (errorMessage);
  		  // ...
  		});
    	
    	};
    	
    	$scope.goToSignIn=function(){
		
			$state.go("SignIn");
    	};
    	
    	$scope.$watch("eMail", function(item){
    		$scope.isEMailCorrect=false;
    		if (item){
    			
    			var rr=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    			
    				if(item.match(rr)){ 
    				$scope.isEMailCorrect=true;
    			}
    				
    		}
    	} );
    	
    	
    }]);