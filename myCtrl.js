app.controller("myCtrl", function($scope) {
	$scope.bottles = [{id: 0, name: "Home", value: 30}, {id: 1, name: "Office", value: 30}];
    $scope.hideAlert = true;
    if (typeof(Storage) == "undefined") {
		$scope.hideAlert = false;
	}	

    $scope.reset = function() {
        $scope.bottles = [];
        $scope.bottles = [{id: 0, name: "Home", value: 30}, {id: 1, name: "Office", value: 30}];
        $scope.updateLocalStorage();
        $scope.hideReset = false;
    }

    $scope.addValue = function(id) {
    	$scope.bottles[id].value = parseInt($scope.bottles[id].value) + 1;
    	$scope.updateLocalStorage();
    }

    $scope.minusValue = function(id) {
    	if (parseInt($scope.bottles[id].value) > 0) {
    		$scope.bottles[id].value = parseInt($scope.bottles[id].value) - 1;
    		$scope.updateLocalStorage();
    	}
    }

    $scope.updateLocalStorage = function() {
    	if (typeof(Storage) !== "undefined") {
    		localStorage.data = angular.toJson($scope.bottles);
    		console.log(localStorage.data);
		} else {
			$scope.hideAlert = false;
		}
    }

    $scope.loadLocalStorage = function() {
    	if (typeof(Storage) !== "undefined") {
    		if (localStorage.data) {
    			$scope.bottles = angular.fromJson(localStorage.data);
    			console.log($scope.bottles);	
    		} else {
                $scope.bottles = [];
    			$scope.bottles = [{id: 0, name: "Home", value: 30}, {id: 1, name: "Office", value: 30}];
    		}
		} else {
			$scope.hideAlert = false;
		}    	
    }

    $scope.loadLocalStorage();
});
