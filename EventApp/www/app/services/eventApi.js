/**
 * Created by Sandeep on 11/09/14.
 */
angular.module('eventApp.services',[]).factory('eventApi',['$http','$ionicLoading','PARSE_CREDENTIALS',function($http,$ionicLoading,PARSE_CREDENTIALS){
    return {
        getAll:function()
        {
            return $http.get('https://api.parse.com/1/classes/Event',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                }
             }
            );

        },

        get:function(id){
            return $http.get('https://api.parse.com/1/classes/Event/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                }
            });
        },
        create:function(data){
            return $http.post('https://api.parse.com/1/classes/Event',data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        edit:function(id,data){
            return $http.put('https://api.parse.com/1/classes/Event/'+id,data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        delete:function(id){
            return $http.delete('https://api.parse.com/1/classes/Event/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },

        getAllSP:function()
        {
            return $http.get('https://api.parse.com/1/classes/Speakers',{
                    headers:{
                        'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                        'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    }
                }
            );
        },

        getSP:function(id)
        {
            return $http.get('https://api.parse.com/1/classes/Speakers/'+id,{
                    headers:{
                        'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                        'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    }
                }
            );
        },
    }
}]).value('PARSE_CREDENTIALS',{
    APP_ID: 'dBlefdNhjMxOGR8SeWrq2zIZezNbrT3SABBpn70f',
    REST_API_KEY:'PFczIJPmoQKk956Z4W0HOGZw2Q9MrMfzBZTu0IDi'
});