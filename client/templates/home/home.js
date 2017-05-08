import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-material';
import 'angular-material/angular-material.css';
import { Meteor } from 'meteor/meteor';
import uiRouter from 'angular-ui-router';
import surveyTemplateUrl from './../surveyform/surveyform.html';
import templateUrl from './home.html';

const name = 'home';

class Home {
    
  constructor($scope, $state) {
    localStorage.removeItem("question");
  $scope.goToState = function(statepass){
      debugger;
      $state.go(statepass);
  }
  }


  

}
 
export default angular.module(name, [
  angularMeteor,
  "ui.router",
  ngAnimate, 
  ngAria, 
  ngMaterial,
  ngMessages
])
  .component(name, {
    templateUrl,
    controller: Home
  })

