'use strict';

/* Controllers */

var flickrCatGalleryControllers = angular.module('flickrCatGallery.controllers', []);

flickrCatGalleryControllers.controller('CatPhotoCtrl', [
    '$scope', 'flickrService', function ($scope, flickrService) {

    flickrService.getCatPhotos()
	.success(function (data, status, headers, config) {
	    var photosResponse = data.photos.photo;
	    var photos = [];

	    // for each photo, get the original image url and the thumbnail url
	    angular.forEach(photosResponse, function (photo) {
		var imageUrl = "http://farm" + photo.farm + ".staticflickr.com/" + photo.server +
		    "/" + photo.id + "_" + photo.secret;
		
		var newPhoto = {
		    src: imageUrl + "_z.jpg",
		    thumbnail: imageUrl + "_s.jpg"
		};

		photos.push(newPhoto);
	    });

	    $scope.photos = photos;
	    $scope.featuredPhoto = photos[0];
	})

	.error(function (data, status, headers, config) {
	    console.log('Error getting response from Flickr');
	});
}]);
