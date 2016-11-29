((app) => {
    app.component('comments', {
        templateUrl: 'js/components/blog/blogItem/comments.html',
        // controller: function($http) {
        //   Comment.find(...).populate('forum').then(...)
    }); //dont delete
})(angular.module('app.blog'))
