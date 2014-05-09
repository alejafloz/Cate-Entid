angular.module('rutasApp')
.controller('CategoriasCtrl', ['$scope', '$http', function ($scope, $http){
		$http.get('http://localhost:8000/categoria')
		.success(function(datos){
			$scope.categoria = datos;
		});
		$scope.categoria = [
				{nombre:'Matematicas', grupo:'B'},
				{nombre:'Ingles', grupo:'C'},
				{nombre:'Español', grupo:'A'}
		]
		$scope.EditarCategoria = false;

		$scope.mateNueva = [];	

		$scope.saveNewMateria = function(){
			$http.post('http://localhost:8000/categoria', $.param($scope.mateNueva))
			.success(function(r){
				console.log('Materia guardada.'),
				console.log(r);
		});	

		$scope.mostrarForm = function() {
			btCrearMostrar=false;
			mostrarForm=true;

		}

		$scope.ocultarForm = function() {
			mostrarForm=false;
			btCrearMostrar=true;
		}

		$scope.saveNewMateria = function() {
			
		}

		$scope.editarAlum = function(alum){
			$scope.alumnoActual = alum;
			$scope.mostrandoFormEdit = true;
		}

		$scope.editarCategoria = function(){
			$http.put('http://192.168.1.157:8080/notas/'+$scope.categoriaActual.id+"/", $.param($scope.categoriaActual)).success(function(r){
				console.log("Modificado con éxito! ");
				console.log(r);
				$scope.CategoriaActual = false;
			});
		}

		$scope.eliminarAlum = function(alum){
			$http.delete('http://192.168.1.157:8000/notas/'+alum.id+"/").success(function(r){
				console.log(alum.nom_alum+" Eliminado con éxito! ");
				console.log(r);
			});
	}

	}




}]);