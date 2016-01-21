var validate = require('mongoose-validator');
    _ = require('lodash');

module.exports = {
  string: function(len, required) {
    return {
      type: String,
      required: !!required,
      validate: validate({
        validator: "isLength",
        arguments: [0, len || 100]
      })
    };
  },
  date: function(start) {
    return {
      type: Date,
      validate: validate({
        validator: "isAfter",
        arguments: null || start
      })
    };
  }
}
