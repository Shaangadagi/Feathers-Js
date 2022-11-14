import Joi from 'Joi';

export const authorSchema=Joi.object({
  authorName:Joi.string().required(),
  authorSurname:Joi.string().required(),
});
export const joiOptions = { convert: true, abortEarly: false };
