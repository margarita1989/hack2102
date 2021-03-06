define(['angular'], function() {
    return ['$scope', '$http', 'PDFViewerService', function($scope, $http, pdf) {
        $scope.books = bookFace.user.books;
        $scope.varPaginator = $scope.books.length == 0 ? true: false;
        $scope.activeBook = $scope.books[0] || {url: null};

        $scope.pdfUrl = $scope.activeBook.url;

        $scope.user_rating = 3;
        $scope.id = 1;

        $scope.instance = pdf.Instance("viewer");

        $scope.varComment = false;
        $scope.varReview = false;

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

        $scope.loadProgress = function(loaded, total, state) {
            console.log('loaded =', loaded, 'total =', total, 'state =', state);
        };

        $scope.sendComment = function() {
            $http.post('/book/comment', {comment: $scope.comment, author: bookFace.user.google.name, id: $scope.activeBook.customID})
                .success(function() {
                    $scope.comment = '';
                });
        };

        $scope.toggleComment = function() {
            $scope.varComment = !$scope.varComment;
        };

        $scope.toggleReview = function() {
            $scope.varReview = !$scope.varReview;
        };
    }];
});