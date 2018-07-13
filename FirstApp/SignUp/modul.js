window.angular.module('nuWireApp.SignUp', [
    'ui.router'
])

.config(function ($stateProvider,$urlRouterProvider) {

    $stateProvider

    .state('SignUp', {
        url: '/SignUp',
        templateUrl: 'SignUp/SignUp.html',
        controller: 'SignUpCntrl',
       
    })
    .state('SignIn', {
        url: '/SignIn',
        templateUrl: 'SignUp/SignIn.html',
        controller: 'SignInCntrl',
        
    })
    
     .state('RegisterDevice', {
        url: '/RegisterDevice',
        templateUrl: 'SignUp/RegisterDevice.html',
        controller: 'RegisterDeviceCntrl',
        
    })
    
     .state('Settings', {
        url: '/Settings',
        templateUrl: 'SignUp/Settings.html',
        controller: 'SettingsCntrl',
        
    })
    
     .state('ForgotPassword', {
        url: '/ForgotPassword',
        templateUrl: 'SignUp/ForgotPassword.html',
        controller: 'ForgotPasswordCntrl',
       
    });
    
   // $urlRouterProvider.otherwise('/SignIn');
    
})
;
