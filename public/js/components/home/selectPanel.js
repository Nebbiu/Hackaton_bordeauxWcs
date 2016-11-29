((app) => {
    app.component('selectPanel', {
        templateUrl: 'js/components/home/selectPanel.html',
        controller: function($stateParams, projectsService, $state) {



                let date = new Date();
                this.hhmm = (new Date(), 'hh:mm');

            }

    }); //dont delete
})(angular.module('app.home'))
