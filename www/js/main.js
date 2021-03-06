/**
 * Minds::mobile
 * Main loader
 *
 * @author Mark Harding
 */

requirejs.config({
	paths: {
		angular: '../vendors/ionic/js/angular/angular.min',
		angularAnimate: '../vendors/ionic/js/angular/angular-animate.min',
		angularSanitize: '../vendors/ionic/js/angular/angular-sanitize.min',
		uiRouter: '../vendors/ionic/js/angular-ui/angular-ui-router.min',
		ionic: '../vendors/ionic/js/ionic.min',
		ionicAngular: '../vendors/ionic/js/ionic-angular',
		text: '../vendors/text',
		socketio: '../vendors/socket-io/socket-io',
		adapter: '../vendors/webrtc/adapter',
		imgcache: '../vendors/imgcache/imgcache'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		angularAnimate: {
			deps: ['angular']
		},
		angularSanitize: {
			deps: ['angular']
		},
		uiRouter: {
			deps: ['angular']
		},
		ionic: {
			deps: ['angular'],
			exports: 'ionic'
		},
		ionicAngular: {
			deps: ['angular', 'ionic', 'uiRouter', 'angularAnimate', 'angularSanitize']
		}
	},
	priority: ['angular', 'ionic'],
	deps: ['bootstrap']
});
