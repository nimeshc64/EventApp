
angular.module('eventApp', ['ionic','eventApp.controllers','eventApp.services','ngCordova','uiGmapgoogle-maps'])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})
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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

      .state('login', {
          url:"/login",
          templateUrl:"app/auth/login.html"
      })

   .state('home', {
     abstract:true,
     url:"/home",
     templateUrl:"app/home/home.html"
   })
   
    .state('home.event', {
    url: '/event',
    views:{
      "tab-event":{
        templateUrl: 'app/event/event.html',
        controller :'eventCtrl'
      }
    }  
  })
  
   .state('home.gallery', {
    url: '/gallery',
    views:{
      "tab-gallery":{
        templateUrl: 'app/gallery/gallery.html',
      }
    }  
  })

  
    .state('app', {
    abstract:true,  
    url: '/app',
    templateUrl: 'app/layout/menu.html',
   
  })
  
   .state('app.view', {
    url: '/view/edit/:id',
    views:{
      "mainContent":{
        templateUrl: 'app/event/view.html',
        controller :'editCtrl'
      }
    }  
  })
  
   .state('app.create', {
    url: '/create',
    views:{
      "mainContent":{
        templateUrl: 'app/event/create.html',
        controller :'createCtrl'
      }
    }  
  })

  .state('app.location', {
      url: '/location/:lat/:lon',
      views:{
          "mainContent":{
              templateUrl: 'app/location/location.html',
              controller:'locationCtrl'
          }
      }
  })

  .state('app.camera', {
      url: '/camera',
      views:{
          "mainContent":{
              templateUrl: 'app/gallery/camera.html',
              controller:'CameraCtrl'
          }
      }
  })

  .state('app.Speaker', {
      url: '/Speaker/:id',
      views:{
          "mainContent":{
              templateUrl: 'app/Speakers/Speakers.html',
              controller:'SpeakerCtrl'
          }
      }
  })
  
  


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
