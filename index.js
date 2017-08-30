const Joi = require('joi');
const Regex = require('emoji-regex');

const emojiRegex = Regex();

const customJoi = {
  base: Joi.string(),
  name: 'string',
  language: {
    strip: 'fail to filter emoji',
    without: 'has emoji inside!'
  },
  rules: [
    {
      name: 'stripEmoji',
      validate(params, value, state, options) {

        return value.replace(emojiRegex, ''); // just strip it
      }
    },
    {
      name: 'noEmoji',
      validate(params, value, state, options) {

        if (emojiRegex.test(value)) {
          return this.createError('string.without', { v:value }, state, options);
        }

        return value;
      }
    }
  ]
};

module.exports = customJoi;
