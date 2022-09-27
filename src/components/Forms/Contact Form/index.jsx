import { Formik } from "formik";
import contactSchema from "../../../schemas/contactSchema";
import formHandler from "./form";

const initial = {
  nickname: "",
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
};

function ContactForm({ initialValues }) {
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik
      validationSchema={contactSchema}
      initialValues={initialValues || initial}
      onSubmit={handleSubmit}
    >
      {formHandler}
    </Formik>
  );
}

export default ContactForm;
