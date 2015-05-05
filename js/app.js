var app = angular.module('myApp', []);
app.directive('optIn', function() {
	return {
		restrict: 'E',
		templateUrl: 'form.html',
		transclude: true
	};
});
