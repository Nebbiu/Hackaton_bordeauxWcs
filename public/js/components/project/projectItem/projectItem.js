((app) => {
    app.component('projectItem', {
        templateUrl: 'js/components/project/projectItem/projectItem.html',
        controller: function($stateParams, projectsService, $state) {

            projectService.getById($stateParams.id).then((response) => {
                this.project = response.data;
            });

            this.delete = (project) => {
              projectService.delete(project).then((response) => {
                console.log('project deleted');
                $state.go('project.list')
              })
            };

            this.saveprojects = (project) => {
                  projectService.save(project).then((res) =>{
                console.log("project saved sucessfully")
              });
            }



            this.resetTodoState = () => {
                this.projects.forEach(function(project) {

                })
            }

            this.editMode = (project, index) => {
                this.project.editMode = true;

                let date = new Date();
                this.hhmm = (new Date(), 'hh:mm');

            };
        }
    }); //dont delete
})(angular.module('app.project'))
