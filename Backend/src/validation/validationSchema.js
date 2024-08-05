// validationSchemas.js
import Joi from 'joi';

// Registration validation schema
const registrationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
  tc: Joi.boolean().required()
});

// Login validation schema
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

// Password reset validation schema
const passwordResetSchema = Joi.object({
  password: Joi.string().min(6).required(),
  password_confirmation: Joi.string().valid(Joi.ref('password')).required()
});

export {
  registrationSchema,
  loginSchema,
  passwordResetSchema
};
