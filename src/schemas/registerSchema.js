import * as yup from "yup";

const registerSchema = yup.object().shape({
  username: yup.string().required().max(50),
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirm: yup.string().oneOf(
    [yup.ref("password"), null],
    "Passwords must match"
  ),
  contactInfo: yup.object().shape({
    firstName: yup.string().required().max(50),
    lastName: yup.string().required().max(134),
    phoneNumber: yup.string().required().matches(/\d{9}/),
  }),
});

export default registerSchema;
