var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('lodash'),
    timestamps = require('mongoose-timestamp'),
    Definitions = require('../model-definitions');


var StorySchema = new Schema({
    assignee: Definitions.string(100, true),
    criteria: Definitions.string(100, false),
    description: Definitions.string(100, false),
    reporter: Definitions.string(100, true),
    status: Definitions.string(100, true),
    title: Definitions.string(100, true),
    type: Definitions.string(100, true),
    userId: Definitions.string(100, true)
});

StorySchema.virtual('id').get(function() {
  return this._id;
});

StorySchema.set('toJSON', {
    virtuals: true
});

StorySchema.plugin(timestamps);
module.exports = mongoose.model('Story', StorySchema);
