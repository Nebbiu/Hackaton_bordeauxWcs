((app) => {
    app.component('contactPanel', {
        templateUrl: 'js/components/home/contactPanel.html',
        controller: function($stateParams, projectsService, $state, $rootScope) {
            this.members = []
            $rootScope.$watch('selectedProject', () => {
                this.members = $rootScope.selectedProject.members
            }, true)



            let date = new Date();
            this.hhmm = (new Date(), 'hh:mm');

        }

    }); //dont delete
})(angular.module('app.home'))
