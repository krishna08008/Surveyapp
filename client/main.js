import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-material';
import 'angular-material/angular-material.css';
import { Meteor } from 'meteor/meteor';
import { name as Home } from './templates/home/home';
import { name as Surveyform } from './templates/surveyform/surveyform';
import { name as Surveydetails } from './templates/surveydetails/surveydetails';
import { name as Existinguser } from './templates/existinguser/existinguser';
import uiRouter from 'angular-ui-router';
import surveyTemplateUrl from './templates/surveyform/surveyform.html';
import templateUrl from './main.html';
//import templateUrl from './templates/surveydetails/surveydetails.html';

 
class mySurveyCtrl {
  constructor($scope, $state, $reactive) {
            $reactive(this).attach($scope);
     $state.go("homestate")
  }
}

const name = "mysurveys";

export default angular.module(name, [
  angularMeteor,
  "ui.router",
  ngAnimate, 
  ngAria, 
  ngMaterial,
  ngMessages,
  Home,
  Surveyform,
  Surveydetails,
  Existinguser
])
  .component(name, {
    templateUrl,
    controller: mySurveyCtrl
  })

  .config(config)
 
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
       .state("homestate", {
        url: "/home",
        template:'<home></home>'
      }) 
       .state("surveyform", {
        url: "/surveyform",
        template:'<surveyform></surveyform>'
      })   
      .state("surveydetails", {
        url: "/surveydetails/:surveyId",
        template:'<surveydetails></surveydetails>'
      })
       .state("existinguser", {
        url: "/existinguser/:surveyId",
        template:'<existinguser></existinguser>'
      })

    $urlRouterProvider.otherwise("/");
  }

/*  function run($rootScope, $state, $location) {
       $state.go("surveydetails");
}*/
