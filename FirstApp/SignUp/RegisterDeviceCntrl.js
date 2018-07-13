window.angular.module('nuWireApp.SignUp').controller('RegisterDeviceCntrl', [
    '$scope', '$state',
    function ($scope, $state) {
    	
    	$scope.isDeviceNameCorrect=false;
    	
    	$scope.registerDeviceName=function(){
    		
    		var database = firebase.database();
        	
    	
    		
        	var userId = firebase.auth().currentUser.uid;
        	//var deviceID = webapis.productinfo.getDuid();
        	var deviceID =8888888;
        	
        
        	
        	firebase.database().ref('users/' + userId+"/devices/"+ (userId+"-"+deviceID)).set({
    		    dev_id:userId+"-"+deviceID,
    		    name: $scope.deviceName,
    		    os: "Tizen",   	    
    		    owner: userId,
    		    settings:{
    		    	"allow_local_discovery" : true,
    	            "allow_online_discovery" : true,
    	            "allow_web_access" : true,
    	            "auto_accept_connect_requests" : true,
    	            "auto_start" : true,
    	            "auto_update" : true,
    	            "pin_for_casting" : 1111,
    	            "require_pin_for_casting" : false
    	          },
    		    
    		    status:"online",
    		    type: "tv"
    		
    		  });
        	 $state.go("Settings"); 
        	
    		};
    	
    		$scope.goToSignUp=function(){
    			
    		$state.go("SignUp");
    	
    	};
    	
    	$scope.$watch("deviceName", function(item){
    		$scope.isDeviceNameCorrect=false;
    		if (item){
    			
    			var rr=/^\S{3,15}$/
    			//любые символы - от 3-х до 15 без пробелов
    				if(item.match(rr)){ 
    				$scope.isDeviceNameCorrect=true;
    			}
    				
    		}
    	} );
    	
    }]);
