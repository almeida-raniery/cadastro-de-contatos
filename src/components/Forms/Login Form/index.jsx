import { Formik } from "formik";
import { useSession } from "../../../providers/SessionProvider";
import loginSchema from "../../../schemas/loginSchema";
import formHandler from "./form";

const initial = {
  username: "",
  password:"",
}

function LoginForm() {
  const {login} = useSession() 

  function handleSubmit(values) {
    login(values)
  }

  return (
    <Formik validationSchema={loginSchema} initialValues={initial} onSubmit={handleSubmit}>
      {formHandler}
    </Formik>
  );
}

export default LoginForm
