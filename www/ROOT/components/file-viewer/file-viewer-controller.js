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
    }];
});