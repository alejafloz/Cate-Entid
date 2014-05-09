angular.module('rutasApp')
.controller('EntidadesCtrl', ['$scope', '$http', function ($scope, $http){

		var servidor ='http://olimpiadas.herokuapp.com/api/';

		$http.get(servidor + 'entidades/')
		.success(function(datos){
			$scope.Entidades = datos;
		});

		
		
		$scope.EditarEntidad = true;


		$scope.EntiNueva = [];

			$scope.saveNewEnti = function(){
			$http.post('http:/olimpiadas.herokuapp/Entidad', $.param($scope.EntiNueva))
			.success(function(r){
				console.log('Entidad guardada.'),
				console.log(r);
		});	

		$scope.mostrarForm = function() {
			btCrearMostrar=false;
			mostrarForm=true;

		});

		$scope.ocultarForm = function() {
			mostrarForm=false;
			btCrearMostrar=true;
		});

		$scope.saveNewEntidad = function() {
			
		});

		

		$scope.editarEntidad = function(){
			$http.put('http://192.168.1.157:8000/notas/'+$scope.categoriaActual.id+"/", $.param($scope.categoriaActual)).success(function(r){
				console.log("Modificado con éxito! ");
				console.log(r);
				$scope.CategoriaActual = false;
			});
		