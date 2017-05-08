import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Surveys = new Mongo.Collection("surveys");

var Schema = {};

Schema.survey = new SimpleSchema({
    'survey_id': {
    type: String,
    optional: true
  },
  'survey_name': {
    type: String,
    optional: true
  },
  'survey_description': {
    type: String,
    optional: true
  },
  'your_email': {
    type: String,
    optional: true
  },
  'your_name': {
    type: String,
    optional: true
  },
  'your_mobile': {
    type: Number,
    optional: true
  }
});

Surveys.attachSchema(Schema.survey);