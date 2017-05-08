import { Meteor } from 'meteor/meteor';
//import { check } from 'meteor/check';
import { Surveys } from './../collections/surveys.js';
import { Mongo } from 'meteor/mongo';
Meteor.methods({
    createSurvey: function (suvey_id, survey_name, survey_description, your_email, your_name, your_mobile) {
        debugger
        if (survey_name != undefined) {
        if(Surveys.find({"your_email": your_email}, {limit: 1}).count()>0){
            return "email is already there";
        }else{
                var Survey = Surveys.insert({'survey_id': suvey_id, 'survey_name': survey_name, 'survey_description': survey_description, 'your_email': your_email, 'your_name': your_name,your_mobile});
                return Survey;
                }

        } else {
            throw new Meteor.Error(400, 'provide-required-fields', getErrorMessage('provide-required-fields'));
        }
    }

});