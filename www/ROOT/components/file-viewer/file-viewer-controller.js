define(['angular'], function() {
    return ['$scope', '$http', 'PDFViewerService', function($scope, $http, pdf) {
        $scope.books = bookFace.user.books;

        $scope.pdfUrl = $scope.books[0].url;

        $scope.instance = pdf.Instance("viewer");

        $scope.nextPage = function() {
            $scope.instance.nextPage();
        };

        $scope.prevPage = function() {
            $scope.instance.prevPage();
        };

        $scope.changeBook = function(url) {
            $scope.pdfUrl = url;
        };

        $scope.gotoPage = function(page) {
            $scope.instance.gotoPage(page);
        };

        $scope.pageLoaded = function(curPage, totalPages) {
            $scope.currentPage = curPage;
            $scope.totalPages = totalPages;
        };

        $scope.loadProgress = function(loaded, total, state) {
            console.log('loaded =', loaded, 'total =', total, 'state =', state);
        };

        var Rating = require('rating');

        var rating = new Rating([1, 2, 3, 4, 5]);
        document.body.appendChild(rating.el);

        rating.on('rate', function(weight) {
            console.log('rated: ' + weight);
        });

        rating.on('current', function(weight) {
            console.log('current: ' + weight);
        });
    }];
});