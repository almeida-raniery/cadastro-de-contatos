import { Formik } from "formik";
import { useContactApi } from "../../../providers/ContactProvider";
import { useSession } from "../../../providers/SessionProvider";
import contactSchema from "../../../schemas/contactSchema";
import formHandler from "./form";

const initial = {
  nickname: "",
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
};

function ContactForm({ initialValues, isEditing }) {
  const {createContact, patchContact} = useContactApi()
  const {loginInfo} = useSession()

  function handleSubmit(values) {
    isEditing 
      ? patchContact(values)
      : createContact(values, loginInfo.token)
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
