//similar to shortly.links
angular.module( 'starter.eventscreation', ['starter.services'] )

.controller( 'EventsController', function ( $scope, $location, Events, LocationService, Config) {
	$scope.eventData = {};

	$scope.newEvent = function() {
		LocationService.getlongLat().then(function ( coordinates ){
			$scope.eventData.coordinates = coordinates;
			$scope.eventData.userId = Config.userId;
			Events.newEvent( $scope.eventData )
			.then( function ( text ) {
				$location.path('/createevent');
			})
			.catch( function ( error ) {
				console.log( $scope.eventData )
				console.log( "Error adding new event data: " + error );
			});
		});
	};
});