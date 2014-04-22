'use strict';

/* Controllers */

var flickrCatGalleryApp = angular.module('flickrCatGalleryApp', []);

flickrCatGalleryApp.controller('CatPhotoCtrl',
	function ($scope, $http) {

		var config = {
			params: {
				'method': 'flickr.photos.search',
				'api_key': 'b354daa288a13415c94441bdfd352257',
				'tags': 'cat',
				'safe_search': '1',
				'format': 'json',
				'jsoncallback': 'JSON_CALLBACK'
			}
		};
		
		var flickrUrl = 'http://api.flickr.com/services/rest/';

		$http.jsonp(flickrUrl, config)
			.success(function (data, status, headers, config) {
				$scope.photos = data.photos.photo;
			})

			.error(function (data, status, headers, config) {
				console.log('Error getting response from Flickr');
		});
});
