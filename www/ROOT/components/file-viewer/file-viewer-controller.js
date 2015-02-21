define(['angular'], function() {
    return ['$scope', '$http', function($scope, $http) {
        $scope.books = bookFace.user.books;

        $scope.pdfUrl = $scope.books[0].url;
    }];
});