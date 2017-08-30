### Joi-emoji

# a emoji strip and check plugin for joi

install:

```
npm install joi-emoji
```

ussage:

```
const joi = require('joi'); //import joi
const joi-emoji = require('joi-emoji'); //import joi-emoji
const assert = require('assert');

const Joi = joi.extend(customJoi); //set the plugin


//then use it as normal joi!
let schema = Joi.string().noEmoji();

let result =  schema.validate('happy🈯');
assert.ok(result.error instanceof Error);


schema = Joi.string().stripEmoji();
result = schema.validate('happy🈯');
assert.equal(result.value, 'happy');
```
