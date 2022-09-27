import { Formik } from "formik";
import { useUserApi } from "../../../providers/UserProvider";
import registerSchema from "../../../schemas/registerSchema";
import formHandler from "./form";

const initial = {
  username: "",
  email:"",
  password:"",
  passwordConfirm:"",
  contactInfo:{
    firstName:"",
    lastName:"",
    phoneNumber:"",
  }
}

function RegisterForm() {
  const {createUser} = useUserApi()

  function handleSubmit(values) {
    createUser(values)
  }

  return (
    <Formik validationSchema={registerSchema} initialValues={initial} onSubmit={handleSubmit}>
      {formHandler}
    </Formik>
  );
}

export default RegisterForm
