define(['angular'], function() {
    return ['$scope', function($scope) {
        $scope.name = bookFace.google.name;
        $scope.ava = bookFace.google.image;
        $scope.email = bookFace.google.email;

    }];
});