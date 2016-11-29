((app) => {
    app.component('selectPanel', {
        templateUrl: 'js/components/home/selectPanel.html',
        controller: function($stateParams, postsService, $state) {



                let date = new Date();
                this.hhmm = (new Date(), 'hh:mm');

            }

    }); //dont delete
})(angular.module('app.home'))
