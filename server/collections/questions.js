import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Surveyquestions = new Mongo.Collection("questions");

var Schema = {};
var increment = 0;
Schema.surveyquestions = new SimpleSchema({
    'email_id': {
    type: String,
    optional: true
  },
    'survey_question': {
    type: Array,
    optional: true
  },
   'survey_question.$': {
    type: Object,
    optional: true
  },
    'survey_question.$.question': {
    type: String,
    optional: true
  },
      'survey_question.$.answerType': {
    type: String,
    optional: true
  },
  // 'survey_question.$.answers': {
  //   type: Object,
  //   optional: true
  // },
   'survey_question.$.questionId': {
    type: String,
    optional: true
  },
});

Surveyquestions.attachSchema(Schema.surveyquestions);