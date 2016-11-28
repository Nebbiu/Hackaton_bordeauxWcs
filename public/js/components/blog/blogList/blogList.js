((app) => {
    app.component('blogList', {
            templateUrl: 'js/components/blog/blogList/blogList.html',
            controller: function(postsService) {

                    postsService.get().then((response) => {
                        this.posts = response.data
                    });

                    this.add = (post) => {
                        this.posts.push(this.posts),
                            console.log('this has been added');
                    };

                    this.blogliststate = 0
                    this.next = () => {
                        this.blogliststate ==
                            this.posts.length - 1 ?
                            this.blogliststate = 0 :
                            this.blogliststate++
                            console.log('search next blog');
                    }

                    this.prev = () => {
                        this.blogliststate < 1 ?
                            this.blogliststate =
                            this.posts.length - 1 :
                            this.blogliststate--;
                        console.log('search prev blog');
                    }

                    let date = new Date();
                    this.hhmm = (new Date(), 'hh:mm');

                    this.blogliststate = 9
                    this.loadMore = () => {
                    this.blogliststate += 3
                }



                } //dont delete
        }) //dont delete
})(angular.module('app.blog'))
