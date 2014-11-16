angular.module("teambreweryApp").service("Pokemon", ["$resource", function($resource){
    return $resource("/api/pokemon");
}])