const joi = require('joi');
const assert = require('assert');

const customJoi = require('./index');

const Joi = joi.extend(customJoi);


let schema = Joi.string().noEmoji();

let result =  schema.validate('happy🈯');
assert.ok(result.error instanceof Error);


schema = Joi.string().stripEmoji();
result = schema.validate('happy🈯');
assert.equal(result.value, 'happy');
