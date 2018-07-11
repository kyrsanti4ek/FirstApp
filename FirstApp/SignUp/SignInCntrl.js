window.angular.module('nuWireApp.SignUp').controller('SignInCntrl', [
    '$scope', '$state',
    function ($scope, $state) {
    	$scope.isEMailCorrect=false;
    	
    	$scope.login=function(){
    		
    		firebase.auth().signInWithEmailAndPassword($scope.eMail, $scope.password)
    		.then(function(firebaseUser) {
    			
    			
    			var userId = firebase.auth().currentUser.uid; //get value of '/devices/' + userId + "-" + devicesID
    			return firebase.database().ref('/devices/' + userId + "-" + devicesID).once('value').then(function(snapshot) {
    			var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    				
    				});
    			
    			
    			if (firebase.database().ref "qaq0DszvoZQ0SvCKQkRP41UejrJ2-SDKHUWUR7SQ25"){ // Success
    					
    				alert("Success!");    		
    			}
    			
    			else{ // if new device then goto register new device
    				$state.go("RegisterDevice");
    			}
    			
    											
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
