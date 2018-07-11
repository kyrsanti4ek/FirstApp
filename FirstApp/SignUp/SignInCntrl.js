window.angular.module('nuWireApp.SignUp').controller('SignInCntrl', [
    '$scope', '$state',
    function ($scope, $state) {
    	$scope.isEMailCorrect=false;
    	
    	$scope.login=function(){
    		
    		firebase.auth().signInWithEmailAndPassword($scope.eMail, $scope.password)
    		.then(function(firebaseUser) {
    			
    			
    			if ("qaq0DszvoZQ0SvCKQkRP41UejrJ2-SDKHUWUR7SQ25"){
    					
    				alert("Success!");    		// Success
    			}
    			
    			else{
    				$state.go("RegisterDevice");
    			}
    			
    											// if new device then goto register new device
   })
    		.catch(function(error) {
    			  // Handle Errors here.
    			
    			  var errorCode = error.code;
    			  var errorMessage = error.message;
    			  alert (errorMessage);
    			  // ...
    			});
    		
    	
    			
    			
    		};
    		
    		$scope.goToSignUp=function(){
    			
    			$state.go("SignUp");
    	
    		
    		
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
