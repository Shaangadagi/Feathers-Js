import Joi from 'Joi';

export const typeSchema=Joi.object({
  typeName:Joi.string().required()
});

export const joiOptions = { convert: true, abortEarly: false };
