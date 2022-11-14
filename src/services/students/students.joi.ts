import Joi from 'Joi';

export const studentSchema = Joi.object({
  name: Joi.string().min(2).required(),
  surName: Joi.string().min(2).required(),
  birthDate: Joi.date().required(),
  gender: Joi.string().required(),
  class: Joi.string().required(),
  point: Joi.number().integer().required(),
  email:Joi.string().email({
    minDomainSegments:2,
    tlds:{
      allow:['com','in']
    }
  }).required(),
  password: Joi.string().required(),


});


export const joiOptions = { convert: true, abortEarly: false };
