import Joi from "@hapi/joi";

export function loginValidation(data) {
  const schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().min(8).required(),
  };

  return Joi.object(schema).validate(data);
}
export function resetPasswordEmailValidation(data) {
  const schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
  };

  return Joi.object(schema).validate(data);
}
export function resetPasswordValidation(data) {
  const schema = {
    password: Joi.string().min(8).required(),
    repeatPassword: Joi.string().min(8).required(),
  };

  return Joi.object(schema).validate(data);
}
