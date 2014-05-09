angular.module('rutasApp', [
	'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('main', {
			url: '/main',
			template: '<h2>Hola  al principal</h2><p>Este es un parrafo sencillo</p>'
		})
		.state('materias', {
			url:'/mate',
			templateURL: 'views/materias.tpl.html '
			controller: 'MateriasCtrl'
		});
}])