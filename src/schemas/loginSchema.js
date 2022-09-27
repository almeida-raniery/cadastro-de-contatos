import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup.string().required().max(50),
  password: yup.string().required(),
});

export default loginSchema;