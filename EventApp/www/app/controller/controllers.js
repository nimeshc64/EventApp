angular.module('eventApp.controllers',[])

.controller('eventCtrl',['$scope','eventApi',function($scope,eventApi){

    eventApi.getAll().success(function(data){
        $scope.items=data.results;

    });

        $scope.onItemDelete=function(item){
        eventApi.delete(item.objectId);
        $scope.items.splice($scope.items.indexOf(item),1);
    }

}])

.controller('SpeakerCtrl',['$scope','eventApi',function($scope,eventApi){

    eventApi.getAllSP().success(function(data){
        $scope.items=data.results;

    });


    $scope.onItemDelete=function(item){
        eventApi.delete(item.objectId);
        $scope.items.splice($scope.items.indexOf(item),1);
    }

}])

.controller('editCtrl',['$scope','eventApi','$state','$stateParams',function($scope,eventApi,$state,$stateParams){

       eventApi.get($stateParams.id).success(function(data){
        $scope.event=data;
        console.log(data);

       eventApi.getAllSP().success(function(data){
           $scope.Spitems=data.results;
       });


       });


    // $scope.event={id:$stateParams.id,content:$stateParams.content};
    // console.log($stateParams.content);
    
    // $scope.edit=function(){
    //     eventApi.edit($scope.eventApi.id,{content:$scope.eventApi.content}).success(function(data){
    //         $state.go('todos');
    //     });
    // }

}])

.controller('SpeakerCtrl',['$scope','eventApi','$state','$stateParams',function($scope,eventApi,$state,$stateParams){

    eventApi.getSP($stateParams.id).success(function(data){
        $scope.spk=data;
        console.log(data);
    });
}])

.controller('createCtrl',['$scope','eventApi','$state',function($scope,eventApi,$state){

    $scope.todo={};
    console.log($scope.todo);
    $scope.create=function(){      //evLocation:$scope.todo.location,
        eventApi.create({evName:$scope.todo.name,evDisc:$scope.todo.disc,evSpek:$scope.todo.spek,evLocname:$scope.todo.locname}).success(function(data){
            $state.go('home.event');
        });
    }


}])

    .controller('locationCtrl',['$scope','$stateParams','$cordovaGeolocation',function($scope,$stateParams,$cordovaGeolocation){

        console.log($stateParams.lot);
        $scope.myLocation = {
            lng :$stateParams.lon,
            lat :$stateParams.lat
        }
        $scope.drawMap = function(position) {

            $scope.$apply(function() {
                //$scope.myLocation.lng ='79.88421700000004';
                //$scope.myLocation.lat ='6.871793';

                $scope.map = {
                    center: {
                        latitude: $scope.myLocation.lat,
                        longitude: $scope.myLocation.lng
                    },
                    zoom: 14,
                    pan: 1
                };

                $scope.marker = {
                    id: 0,
                    coords: {
                        latitude: $scope.myLocation.lat,
                        longitude: $scope.myLocation.lng
                    }
                };

                $scope.marker.options = {
                    draggable: false,
                    labelContent: "lat: " + $scope.marker.coords.latitude + '<br/> ' + 'lon: ' + $scope.marker.coords.longitude,
                    labelAnchor: "80 120",
                    labelClass: "marker-labels"
                };
            });
        }

        navigator.geolocation.getCurrentPosition($scope.drawMap);
    }])

    .controller('loginController', function($scope, $state, $ionicPopup) {

        $scope.signIn = function(user) {
            var pass = user.password;
            var un   = user.username;
            if (un=='admin' && pass=='admin123')  {
                //console.log('Sign-In', pass, un);
                $state.go('home.event');
                //$state.closeModal();
            }
            else {
                console.log('error');
                $ionicPopup.alert({
                    title: 'Enter your Correct UserName & Password'
                }).then(function (password) {
                    // You have the password now
                });
            }
            //
        };
    })

    .controller('CameraCtrl',['$cordovaCamera', function ($scope, $cordovaCamera) {
        $scope.takePicture = function () {
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA
            };

            // udpate camera image directive
            $cordovaCamera.getPicture(options).then(function (imageData) {
                $scope.cameraimage = "data:image/jpeg;base64," + imageData;
            }, function (err) {
                console.log('Failed because: ');
                console.log(err);
            });
        };
    }]);
;