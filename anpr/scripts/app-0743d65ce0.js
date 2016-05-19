!function(){"use strict";angular.module("anpr",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(){return n}var n=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("anpr").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t,n){var a=this;a.hide11=function(){var t=document.querySelector("#myModal");t.className="modal show",setTimeout(function(){t.className="modal fade"},3e3)}}t.$inject=["moment","$location"];var n={restrict:"E",templateUrl:"app/components/nbut/nbut.html",scope:{},controller:t,controllerAs:"vm",bindToController:!0};return n}angular.module("anpr").directive("newButton",t)}(),function(){"use strict";function t(){function t(t,n){var a=this;a.relativeDate=t(a.creationDate).fromNow(),a.isActive=function(t){var a=t===n.path();return a}}t.$inject=["moment","$location"];var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return n}angular.module("anpr").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function n(n,a,o,e){var r,i=t(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(n.extraValues,function(t){i.type(t).pause()["delete"]()}),r=n.$watch("vm.contributors",function(){angular.forEach(e.contributors,function(t){i.type(t.login).pause()["delete"]()})}),n.$on("$destroy",function(){r()})}function a(t,n){function a(){return o().then(function(){t.info("Activated Contributors View")})}function o(){return n.getContributors(10).then(function(t){return e.contributors=t,e.contributors})}var e=this;e.contributors=[],a()}a.$inject=["$log","githubContributor"];var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:n,controller:a,controllerAs:"vm"};return o}t.$inject=["malarkey"],angular.module("anpr").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,n){function a(a){function e(t){return t.data}function r(n){t.error("XHR Failed for getContributors.\n"+angular.toJson(n.data,!0))}return a||(a=30),n.get(o+"/contributors?per_page="+a).then(e)["catch"](r)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",e={apiHost:o,getContributors:a};return e}t.$inject=["$log","$http"],angular.module("anpr").factory("githubContributor",t)}(),function(){"use strict";function t(t){return{get:function(){return t.get("https://api.myjson.com/bins/1ia4s")}}}t.$inject=["$http"],angular.module("anpr").factory("postt",t)}(),function(){"use strict";function t(t){var n=this;t.get().success(function(t){n.postss=t.posts})}t.$inject=["postt"],angular.module("anpr").controller("PostsController",t)}(),function(){"use strict";function t(t,n,a){function o(){r(),t(function(){i.classAnimation="rubberBand"},4e3)}function e(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function r(){i.awesomeThings=n.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1462233563093,i.showToastr=e,o()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("anpr").controller("MainController",t)}(),function(){"use strict";function t(){}angular.module("anpr").controller("ContactController",t)}(),function(){"use strict";function t(){}angular.module("anpr").controller("CommentsController",t)}(),function(){"use strict";function t(t){return{get:function(){return t.get("https://api.myjson.com/bins/1ia4s")},get1:function(){var t=new Firebase("https://anwp.firebaseio.com/categories");return t}}}t.$inject=["$http"],angular.module("anpr").factory("categories",t)}(),function(){"use strict";function t(t){var n=this;n.count=0,n.myFunc=function(){n.count++};var a,o=t.get1();o.on("value",function(t){n.cats=t.val(),console.log(n.cats),a=Object.keys(n.cats).length}),n.addCategory=function(t){console.log(o.lenght),o.child(a).set(t),inputCat.value=""}}t.$inject=["categories"],angular.module("anpr").controller("CategoriesController",t)}(),function(){"use strict";function t(){}angular.module("anpr").controller("AboutController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("anpr").run(t)}(),function(){"use strict";function t(t,n){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("about",{url:"/about",templateUrl:"app/about/about.html",controller:"AboutController",controllerAs:"about"}).state("contact",{url:"/contact",templateUrl:"app/contact/contact.html",controller:"ContactController",controllerAs:"contact"}).state("comments",{url:"/comments",templateUrl:"app/comments/comments.html",controller:"CommentsController",controllerAs:"comments"}).state("posts",{url:"/posts",templateUrl:"app/posts/posts.html",controller:"PostsController",controllerAs:"posts"}).state("categories",{url:"/categories",templateUrl:"app/categories/categories.html",controller:"CategoriesController",controllerAs:"categories"}),n.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("anpr").config(t)}(),function(){"use strict";angular.module("anpr").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,n){t.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("anpr").config(t)}(),angular.module("anpr").run(["$templateCache",function(t){t.put("app/about/about.html","<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div>Abouttt</div>"),t.put("app/categories/categories.html",'<div class=container><div><acme-navbar></acme-navbar></div><div class=col-md-12><form class=form-horizontal><div class=form-group><div><label for=inputCat>New Category:</label><input ng-model=cat id=inputCat placeholder=Category></div></div></form><button type=button ng-click=categories.addCategory(cat) class="btn btn-success">Add Category</button></div><div class=row ng-repeat="(key, category) in categories.cats"><div class=col-md-4><h3>{{key}}-{{category}}</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p></div><div class=col-md-4></div></div></div>'),t.put("app/comments/comments.html","<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div class=container><div class=row><div class=col-sm-8><h3>Column 1</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p></div><div class=col-sm-4><h3>Column 2</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p></div></div></div></div>"),t.put("app/contact/contact.html","<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div>Contact</div>"),t.put("app/main/main.html",'<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class=lead><img src=assets/images/yeoman.png alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class=main.classAnimation><button type=button class="btn btn-lg btn-success" ng-click=main.showToastr()>Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class=row><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class=thumbnail><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class=caption><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href={{awesomeThing.url}}>{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/posts/posts.html",'<div class=container><div><acme-navbar creation-date=vm.creationDate></acme-navbar></div><new-button></new-button><div class=container><div class=row ng-repeat="post in posts.postss"><div class=col-sm-8><h3>{{post}}</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand ng-href=#><span class="glyphicon glyphicon-home"></span> {{6+7}} Gulp Angular</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li ng-class="{ active: vm.isActive(\'/\') }"><a ng-href=#>Home</a></li><li ng-class="{ active: vm.isActive(\'/categories\') }"><a ng-href=#/categories>Categories</a></li><li ng-class="{ active: vm.isActive(\'/posts\') }"><a ng-href=#/posts>Posts</a></li><li ng-class="{ active: vm.isActive(\'/comments\') }"><a ng-href=#/comments>Comments</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>'),t.put("app/components/nbut/nbut.html",'<button type=button class="btn btn-primary" ng-click=vm.hide11()>Start Loading</button><div class="modal fade" id=myModal role=dialog><div class=modal-dialog><img src=http://i.stack.imgur.com/FhHRx.gif></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-0743d65ce0.js.map