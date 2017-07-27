app.controller("myCtrl", function($scope) {
	$scope.shuttlecockPriceEach = 12000;

    $scope.players = [];
    $scope.totalfee = 0;
    // $scope.players = [{id: 0, name: "asdf", shuttlecock: "0", fee: "0"}];

    $scope.addPlayer = function() {
    	if ($scope.name) {
	    	$scope.players.push({
	    		id: $scope.players.length,
	    		name: $scope.name,
	    		shuttlecock: "0",
	    		fee: 0
	    	});
	    	$scope.name = "";
	    	console.log($scope.players);
	    }
    };

    $scope.reset = function() {
    	$scope.players = [];
    	$scope.name = "";
    	$scope.shuttlecockPriceEach = 12000;
    	$scope.totalfee = 0;
    }

    $scope.addShuttlecock = function(id) {
    	$scope.players[id].shuttlecock = parseInt($scope.players[id].shuttlecock) + 1;
    	$scope.players[id].fee = parseInt($scope.players[id].shuttlecock) * $scope.shuttlecockPriceEach / 4;
    	$scope.calculateTotal();
    }

    $scope.minusShuttlecock = function(id) {
    	if (parseInt($scope.players[id].shuttlecock) > 0) {
    		$scope.players[id].shuttlecock = parseInt($scope.players[id].shuttlecock) - 1;
    		$scope.players[id].fee = parseInt($scope.players[id].shuttlecock) * $scope.shuttlecockPriceEach / 4;
    		$scope.calculateTotal();
    	}
    }

    $scope.calculateTotal = function() {
    	$total = 0
    	for (i = 0; i < $scope.players.length; i++) {
    		$total += parseInt($scope.players[i].fee);
    	}
    	$scope.totalfee = $total;
    }
});