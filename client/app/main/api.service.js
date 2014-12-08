angular.module("teambreweryApp").value("API_PATH", "http://api.teambrewery.dev/api").value("api", function(path){
	return "http://api.teambrewery.dev/api/" + path;
});