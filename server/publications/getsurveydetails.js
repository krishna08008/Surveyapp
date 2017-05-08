import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Surveys } from './../collections/surveys.js';

/*Meteor.publish('getSurveyDetails',function(userId) {
    if(this.userId) {   
        if(userId != undefined) {
            return Meteor.surveys.find({_id:userId},{fields:{survey_name:1,survey_description:1}});
        } else {
            return Meteor.surveys.find({_id:this.userId},{fields:{survey_name:1,survey_description:1}})
        }
    } else {
        throw new Meteor.Error(400,'user-not-found',getErrorMessage('user-not-found'));
    }
});*/

  Meteor.publish('getSurveyDetails', function(surveId) {
      debugger;
    return Surveys.find({_id:surveId});
  });
  