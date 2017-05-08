import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-material';
import 'angular-material/angular-material.css';
import { Meteor } from 'meteor/meteor';
import uiRouter from 'angular-ui-router';
import templateUrl from './surveyform.html';

const name = 'surveyform';

class Surveyform {
    
  constructor($scope, $state) {
  $scope.surveyFormSubmit = function(){
      $scope.surveyId = Math.random().toString(36).slice(2);
      debugger;
      localStorage.setItem("surveyEmailId", $scope.surveyerEmail);
      Meteor.call("createSurvey", $scope.surveyId, $scope.surveyName, $scope.surveyDetails, $scope.surveyerEmail, $scope.surveyerName, $scope.surveyerMobile, function(error, result) {
        if(error){
          console.log(error);
          debugger;
        }else if (result != "email is already there"){
          console.log(result);
          debugger;
          //localStorage.setItem("dumbId", result);

          $state.go("surveydetails", {"surveyId":result});
        }else{
           $state.go("existinguser", {"surveyId":result});
        }
      })
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
    controller: Surveyform
  })

