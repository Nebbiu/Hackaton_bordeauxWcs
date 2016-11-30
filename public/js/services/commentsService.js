((app) => {

    app.service('commentsService', function($http) {
        return {
            add(comment) {
                return $http.post('/api/comments', comment)
            }
        }
    })

})(angular.module('app.services'));
