'use strict';

/* Controllers */

var flickrCatGalleryControllers = angular.module('flickrCatGallery.controllers', []);

flickrCatGalleryControllers.controller('CatPhotoCtrl', [
	'$scope', 'flickrService', function ($scope, flickrService) {

		flickrService.getCatPhotos()
			.success(function (data, status, headers, config) {
				$scope.photos = data.photos.photo;
			})

			.error(function (data, status, headers, config) {
				console.log('Error getting response from Flickr');
			});
}]);
