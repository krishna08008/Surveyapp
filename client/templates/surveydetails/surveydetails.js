import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-material';
import 'angular-material/angular-material.css';
import { Meteor } from 'meteor/meteor';
import uiRouter from 'angular-ui-router';
import templateUrl from './surveydetails.html';
import {surve} from './../../collections.js'
const name = 'surveydetails';

class Surveydetails {
    
  constructor($scope, $state, $stateParams, $compile) {
        console.log($stateParams.surveyId);
        var surveId = $stateParams.surveyId;
      $scope.viewModel(this);
    this.subscribe('getSurveyDetails',function(){return [surveId]});
    this.helpers({
      surveys() {
			// Show newest tasks at the top
            //console.log(surve.find({}).fetch().length);
            //console.log(surve.find({_id:surveId}).fetch().length);

			return surve.find().fetch()
      }
    })
  $scope.surveyFormSubmit = function(){
      
      Meteor.call("createSurvey", $scope.surveyName, $scope.surveyDetails, $scope.surveyerEmail, $scope.surveyerName, $scope.surveyerMobile, function(error, result) {
        if(error){
          console.log(error);

        }else if (result){
          console.log(result);

        }
      });
  }

if(!localStorage.getItem("question") == true){
    $scope.addSurveyQuestion = "Add your question";
} else{
    $scope.addSurveyQuestion = localStorage.getItem("question");
}


/*    $scope.addQuestion = function(){
        if($scope.addSurveyQuestion == "Add your question"){
            $scope.addSurveyQuestion = "";
        }
    
    }*/




    $scope.addRadio = function($event){
      var parent = $event.target.parentNode.nodeName;
      var parentwrap = document.querySelector(parent);
      var parentwrapout = parentwrap.parentNode.nodeName;
      var parentwrapobj = document.querySelector(parentwrapout);
      var prevsibling = parentwrapobj.previousSibling.previousSibling;
      $scope.answerType = "radio";
      angular.element(prevsibling).append("<div class='option'><input type='radio' name='same'></input> Add your option</div>");
      $scope.saveQuestion();
    }

        $scope.addCheckbox = function($event){
      var parent = $event.target.parentNode.nodeName;
      var parentwrap = document.querySelector(parent);
      var parentwrapout = parentwrap.parentNode.nodeName;
      var parentwrapobj = document.querySelector(parentwrapout);
      var prevsibling = parentwrapobj.previousSibling.previousSibling;
      $scope.answerType = "check";      
      angular.element(prevsibling).append("<div class='option'><input type='checkbox' name='same'></input> Add text here</div>");
      $scope.saveQuestion();
    }

            $scope.addTextbox = function($event){
      var parent = $event.target.parentNode.nodeName;
      var parentwrap = document.querySelector(parent);
      var parentwrapout = parentwrap.parentNode.nodeName;
      var parentwrapobj = document.querySelector(parentwrapout);
      var prevsibling = parentwrapobj.previousSibling.previousSibling;
            $scope.answerType = "text";
      angular.element(prevsibling).append("<div class='option'><label>Your answer here:</label><input type='text' name='same'></input></div>");
      $scope.saveQuestion();
    }
      $scope.increment = 0;
      $scope.showhide = false;      
    $scope.addNewQuestion = function($event){
      $scope.showhide = true;
      $scope.increment++;
      var addQuestionTemplate = "<h3>Question:"+$scope.increment+"</h3><textarea class='surveyquestion' ng-click='addQuestion()' ng-model='addSurveyQuestion"+$scope.increment+"' placeholder='Enter your question dumbass'>Add your question</textarea>";
      var temp = $compile(addQuestionTemplate)($scope);
      var selector = $event.target;
      //var selectorElement = document.querySelector(selector);
      var nextsiblingele = selector.nextSibling.nextSibling;
      angular.element(nextsiblingele).append(temp);
    }


            $scope.saveQuestion = function(){
      debugger;
      $scope.surveyModels = $scope["addSurveyQuestion"+$scope.increment];
      $scope.questionId = Math.random().toString(36).slice(2);
        var questionAndAnswers = {"questionId":$scope.questionId,"question": $scope.surveyModels, "answerType":$scope.answerType, "answers": ""};
        // $scope.questionId = Math.random().toString(36).slice(2);

        Meteor.call("saveQuestion", localStorage.getItem("surveyEmailId"), questionAndAnswers, function(error, result) {
        if(error){
          console.log(error);

        }else if (result){
          console.log(result);

        }
      });
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
    controller: Surveydetails
  })

