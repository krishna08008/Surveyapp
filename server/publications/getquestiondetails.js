import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Surveyquestions } from './../collections/questions.js';

  Meteor.publish('getQuestionDetails', function(emailId) {
      debugger;
    return Surveyquestions.find({email_id:emailId});
  });
  