/* eslint-disable indent */
import Joi from 'Joi';

const  bookName=Joi.string().required();
const  pageCount=Joi.number().integer();
const  point=Joi.number();
const  authorId=Joi.string();
const  typeId=Joi.string();

export const bookSchema=Joi.object({
bookName,
pageCount,
point,
authorId,
typeId
});
export const joiOptions = { convert: true, abortEarly: false };
