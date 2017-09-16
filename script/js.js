var app=angular.module("myApp",["firebase"]);
app.controller("myController",function($scope,$firebaseArray) {


	var ref=firebase.database().ref("productDetails");
	$scope.productDetails=$firebaseArray(ref);

	$scope.saveProduct=function() {

		if($scope.product.name && $scope.product.price)
		{
			$scope.productDetails.$add($scope.product)
			.then(function(ref) {
				$scope.product.name="";
				$scope.product.price="";
			},function(error) {
				console.log(error);
			});
			$scope.info = "New Product Added Successfully!";
		}
	}

	$scope.selectProduct = function(product){
		$scope.clickedProduct = product;
	};

	$scope.deleteProduct = function(){
		$scope.productDetails.$remove($scope.clickedProduct);
		$scope.info = "Product Deleted Successfully!";

	};

	$scope.editData=function(id) {
		
		console.log(id);
		
		
		}

	$scope.clearInfo = function(){
		$scope.info = "";
	};

	$scope.showTotalAmount=function() {
		$scope.sum=0;
		for(i=0;i<$scope.productDetails.length;i++)
		{
			$scope.sum+=parseInt($scope.productDetails[i].price);
		}

		console.log($scope.sum);
	}
})