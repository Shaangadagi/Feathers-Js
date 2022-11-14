import Joi from 'Joi';

export const borrowsSchema=Joi.object({
  userId:Joi.string(),
  bookId:Joi.string(),
  takenDate:Joi.string(),
  broughtDate:Joi.string()

});


export const joiOptions = { convert: true, abortEarly: false };
