window.angular.module('nuWireApp.SignUp').controller('SignInCntrl', [
    '$scope', '$state',
    function ($scope, $state) {
      $scope.isEMailCorrect=false;
      
      $scope.login=function(){
        
        //var deviceID = webapis.productinfo.getDuid();
        var deviceID =1111111;

            firebase.auth().signInWithEmailAndPassword($scope.eMail, $scope.password)
            .then(function(firebaseUser) {
              var userId = firebase.auth().currentUser.uid;
          return firebase.database().ref('users/' + userId+"/devices/"+ (userId+"-"+deviceID)).once('value').then(function(snapshot) {
          var userDeviceName = (snapshot.val() && snapshot.val().name);
          if(!userDeviceName)
          {
            $state.go("RegisterDevice");
          }
          else
          {
          // есть устройство
          }
      
    });
           
       })
          
          
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