import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-material';
import 'angular-material/angular-material.css';
import { Meteor } from 'meteor/meteor';
import uiRouter from 'angular-ui-router';
import templateUrl from './existinguser.html';
import {questionsurve} from './../../collections.js'
const name = 'existinguser';

class Existinguser {
    
  constructor($scope, $state, $stateParams) {
        var emailId = localStorage.getItem("surveyEmailId");
      $scope.viewModel(this);
    this.subscribe('getQuestionDetails',function(){return [emailId]});
    this.helpers({
      surveys() {
			// Show newest tasks at the top
            //console.log(surve.find({}).fetch().length);
            //console.log(surve.find({_id:surveId}).fetch().length);
            debugger;
            console.log(questionsurve.find().fetch());
			return questionsurve.find().fetch();
      
      }
    })

  debugger;
if(!localStorage.getItem("question") == true){
    $scope.addSurveyQuestion = "Add your question";
} else{
    $scope.addSurveyQuestion = localStorage.getItem("question");
}


    $scope.addQuestion = function(){
        if($scope.addSurveyQuestion == "Add your question"){
            $scope.addSurveyQuestion = "";
        }
    
    }
    $scope.saveQuestion = function(){
        localStorage.setItem("question", $scope.addSurveyQuestion);
         $scope.addSurveyQuestion
         debugger;
         $scope.questionId = Math.random().toString(36).slice(2);
         localStorage.setItem("questionid", $scope.questionId);

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
    controller: Existinguser
  })

