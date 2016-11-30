((app) => {

    app.service('projectsService', function($http) {
        return {
            get(){
                return $http.get('/api/projects/');
            },
            getById(id){
                return $http.get('/api/projects/' + id);
            },
            delete(project){
                return $http.delete('/api/projects/' + project._id);
            },

            save(project){
                if (!project._id) {
                    request = $http.project('/api/projects/', project)
                } else {
                    request = $http.put('/api/projects/'+ project._id, project)
                }
                return request
            }
        }
    })

})(angular.module('app.services'));
