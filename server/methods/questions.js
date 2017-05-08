import { Meteor } from 'meteor/meteor';
//import { check } from 'meteor/check';
import { Surveyquestions } from './../collections/questions.js';
import { Mongo } from 'meteor/mongo';
Meteor.methods({
    saveQuestion: function (emailid, addsurveyquestion) {

        debugger
        if (addsurveyquestion != undefined) {
        if(Surveyquestions.find({"email_id": emailid}, {limit: 1}).count()>0){

            //return "Email is already there dumbass";
            console.log(addsurveyquestion);
           // var Surveyquestion = Surveyquestions.insert({'email_id': emailid, 'survey_question': questiongroupJson});
                var Surveyquestion = Surveyquestions.update({'email_id': emailid}, {$addToSet:{'survey_question': addsurveyquestion}});

                return Surveyquestion;


        }else if(Surveyquestions.find({"email_id": emailid}, {limit: 1}).count()==0){
                        console.log(addsurveyquestion, "dumbfirst");
                var questionArray = [];
                questionArray.push(addsurveyquestion);
                var Surveyquestion = Surveyquestions.insert({'email_id': emailid, 'survey_question': questionArray});
                        console.log(addsurveyquestion, "dumb");
                return Surveyquestion;
            }
            else{
            throw new Meteor.Error(400, 'provide-required-fields', getErrorMessage('provide-required-fields'));
        }
    }
    }
});


/*Meteor.methods({
    saveQuestion: function (emailid, addsurveyquestion) {

        debugger
        if (addsurveyquestion != undefined) {
        if(Surveyquestions.find({"email_id": emailid}, {limit: 1}).count()>0){

            //return "Email is already there dumbass";
                var Surveyquestion = Surveyquestions.update({'email_id': emailid}, {$set:{'survey_question': addsurveyquestion}});
                return Surveyquestion;


        }else if(Surveyquestions.find({"email_id": emailid}, {limit: 1}).count()==0){
        console.log(addsurveyquestion, "dumb");
                var Surveyquestion = Surveyquestions.insert({'email_id': emailid, 'survey_question': addsurveyquestion});
                return Surveyquestion;
            }
            else{
            throw new Meteor.Error(400, 'provide-required-fields', getErrorMessage('provide-required-fields'));
        }
    }
    }
});*/