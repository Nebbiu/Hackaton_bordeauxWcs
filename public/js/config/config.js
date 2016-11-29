((app) => {

    app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',

        function($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.hashPrefix('!');
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('project', {
                    template: '<home></home>',
                    url: '',
                    abstract: true
                })
                .state('project.list', {
                    template: '<project-list></project-list>',
                    url: '/'
                })
                .state('project.item', {
                    template: '<project-item></project-item>',
                    url: '/project/:id'
                });
        }
    ]);

})(angular.module('app.config', []))
