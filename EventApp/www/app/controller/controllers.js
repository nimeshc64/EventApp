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

.controller('editCtrl',['$scope','eventApi','$state','$stateParams',function($scope,eventApi,$state,$stateParams){

       eventApi.get($stateParams.id).success(function(data){
        $scope.event=data;
        console.log(data);
    });


    // $scope.event={id:$stateParams.id,content:$stateParams.content};
    // console.log($stateParams.content);
    
    // $scope.edit=function(){
    //     eventApi.edit($scope.eventApi.id,{content:$scope.eventApi.content}).success(function(data){
    //         $state.go('todos');
    //     });
    // }

}])

.controller('createCtrl',['$scope','eventApi','$state',function($scope,eventApi,$state){

    $scope.todo={};

    $scope.create=function(){
        eventApi.create({evName:$scope.todo.name,evDisc:$scope.todo.disc,evSpek:$scope.todo.spek,evLocation:$scope.todo.location}).success(function(data){
            $state.go('home.event');
        });
    }


}])

;