angular.module('rutasApp', [
	'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
	
	// Para permitir el CORS
	$httpProvider.defaults.useXDomain = true;
	//delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';


	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('categoria', {
			url: '/categoria',
			templateUrl: 'views/categorias.tpl.html',
			controller: 'CategoriasCtrl'
		})

		.state('entidad', {
			url:'/entidad',
			templateUrl: 'views/entidades.tpl.html'
			
		})
		.state('imagenes', {
			url:'/imagenes',
			templateUrl: 'views/imagenes.tpl.html'
			
		});
}])