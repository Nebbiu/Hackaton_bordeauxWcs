((app) => {
    app.component('projectList', {
            templateUrl: 'js/components/project/projectList/projectList.html',
            controller: function(projectsService, $rootScope, $state) {

                    this.selectProject = (project) =>{
                      $rootScope.selectedProject = project
                    }

                    this.display = (project) => {
                        $rootScope.selectedProject = project
                        $state.go('project.item', {id: project._id})
                    }

                    projectsService.get().then((response) => {
                        this.projects = response.data
                    });

                    this.add = (project) => {
                        this.projects.push(this.projects),
                            console.log('this has been added');
                    };

                    this.projectliststate = 0
                    this.next = () => {
                        this.projectliststate ==
                            this.projects.length - 1 ?
                            this.projectliststate = 0 :
                            this.projectliststate++
                            console.log('search next project');
                    }

                    this.prev = () => {
                        this.projectliststate < 1 ?
                            this.projectliststate =
                            this.projects.length - 1 :
                            this.projectliststate--;
                        console.log('search prev project');
                    }

                    let date = new Date();
                    this.hhmm = (new Date(), 'hh:mm');

                    this.projectliststate = 6
                    this.loadMore = () => {
                    this.projectliststate += 3
                }



                } //dont delete
        }) //dont delete
})(angular.module('app.project'))
