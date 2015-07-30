angular.module('eventApp', ['ionic'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    //-----------Routes----------
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app',{
                abstract:true,
                url:"/app",
                templateUrl:"app/layout/menu.html"
            })
            .state('app.eventCreate',{
                url:"/eventCreate",
                views:{
                    "mainContent":{
                        templateUrl:"app/event/create.html"
                    }
                }
            })
            .state('app.eventEdit',{
                url:"/eventEdit",
                views:{
                    "mainContent":{
                        templateUrl:"app/event/view.html"
                    }
                }
            })

            .state('home', {
                abstract:true,
                url: '/home',
                templateUrl: 'app/home/home.html'
            })

            .state('home.event',{
                url:"/event",
                views:{
                    "tab-event":{
                        templateUrl:"app/home/event.html"
                    }
                }
            })

            .state('home.gallery',{
                url:"/gallery",
                views:{
                    "tab-gallery":{
                        templateUrl:"app/home/gallery.html"
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/app/eventCreate');
    });