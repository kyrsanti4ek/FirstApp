
'use strict';
//Жорсткий режим

window.angular.module('nuWireApp', [
   //Создание модуля-приложения
    
    'ui.router',
   'nuWireApp.SignUp'
   
])
.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                root: {
                	template: '<ui-view/>'
                }
            }
        });
    $urlRouterProvider.otherwise('/SignIn');

})
;
