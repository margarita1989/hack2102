define([''], function() {
    return ['$scope', function($scope) {
        var app = angular.module('app', [
            'lr.upload'
        ]);

        app.controller('AppCtrl', function ($scope, $http) {

            // App variable to show the uploaded response
            $scope.responseData = undefined;

            // Get initial uploads and populate list
            $http({
                method: 'get',
                url: '/uploads?' + new Date().getTime(),
                cache: false
            }).then(function (response) {
                $scope.uploads = response.data;
            });

            // Global handler for onSuccess that adds the uploaded files to the list
            $scope.onGlobalSuccess = function (response) {
                console.log('AppCtrl.onSuccess', response);
                $scope.responseData = response.data;
                $scope.uploads = $scope.uploads.concat(response.data.files);
            };
        });

        app.controller('SimpleCtrl', function ($scope, $http) {
            // Nothing special needed from the controller
        });

        app.controller('AdvancedMarkupCtrl', function ($scope, $http) {

            // Valid mimetypes
            $scope.acceptTypes = 'image/*,application/pdf';

            // Data to be sent to the server with the upload request
            $scope.uploadData = {
                myformdata: 'hello world'
            };

            $scope.onUpload = function (files) {
                console.log('AdvancedMarkupCtrl.onUpload', files);
            };

            $scope.onError = function (response) {
                console.error('AdvancedMarkupCtrl.onError', response);
                $scope.responseData = response.data;
            };

            $scope.onComplete = function (response) {
                console.log('AdvancedMarkupCtrl.onComplete', response);
                $scope.responseData = response.data;
            };
        });

        // Start it up
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['app']);
        });
    }];
});