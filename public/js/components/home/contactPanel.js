((app) => {
    app.component('contactPanel', {
        templateUrl: 'js/components/home/contactPanel.html',
        controller: function($stateParams, projectsService, $state) {



                let date = new Date();
                this.hhmm = (new Date(), 'hh:mm');

            }

    }); //dont delete
})(angular.module('app.home'))
