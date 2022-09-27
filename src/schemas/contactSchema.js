import * as yup from "yup";

const contactSchema = yup.object().shape({
  nickname: yup.string().max(30),
  email: yup.string().email().required(),
  firstName: yup.string().required().max(50),
  lastName: yup.string().required().max(134),
  phoneNumber: yup.string().required().matches(/\d{9}/),
});

export default contactSchema;
