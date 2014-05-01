'use strict';

/* Services */

var flickrCatGalleryServices = angular.module('flickrCatGallery.services', []);


// Service for getting the API key

flickrCatGalleryServices.
	value('flickrApiKey',	'b354daa288a13415c94441bdfd352257');


// Service for getting the Flickr URL

flickrCatGalleryServices.
	value('flickrUrl', 'http://api.flickr.com/services/rest/');


// Service for getting config for Flickr cat photos request

flickrCatGalleryServices.
	factory('catPhotoReqConfig', ['flickrApiKey',

		function catPhotoReqConfig(flickrApiKey) {		

			return {
				params : {
					'method': 'flickr.photos.search',
					'api_key': flickrApiKey,
					'tags': 'cat',
					'safe_search': '1',
					'format': 'json',
					'jsoncallback': 'JSON_CALLBACK'
				}
			};
}]);


// Service for getting cat photos from Flickr

flickrCatGalleryServices.
	service('flickrService', ['$http', 'flickrUrl', 'catPhotoReqConfig',

		function flickrService($http, flickrUrl, catPhotoReqConfig) {

			this.getCatPhotos = function() {
				return $http.jsonp(flickrUrl, catPhotoReqConfig);
			};
}]);
			
