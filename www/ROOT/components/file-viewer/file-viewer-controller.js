define(['angular'], function() {
    return ['$scope', '$http', 'PDFViewerService', function($scope, $http, pdf) {
        $scope.books = bookFace.user.books;
        $scope.activeBook = $scope.books[0] || {url: null};

        $scope.pdfUrl = $scope.activeBook.url;

        $scope.instance = pdf.Instance("viewer");

        $scope.nextPage = function() {
            $scope.instance.nextPage();
        };

        $scope.prevPage = function() {
            $scope.instance.prevPage();
        };

        $scope.changeBook = function(book) {
            $scope.activeBook = book;
            $scope.pdfUrl = $scope.activeBook.url;
        };

        $scope.gotoPage = function(page) {
            $scope.instance.gotoPage(page);
        };

        $scope.pageLoaded = function(curPage, totalPages) {
            $scope.currentPage = curPage;
            $scope.totalPages = totalPages;
        };

        $scope.sendComment = function(id) {
            $http.post('/book/comment', {comment: $scope.comment, author: bookFace.user.google.name, id: id})
                .success(function() {

                });
        }
    }];
});