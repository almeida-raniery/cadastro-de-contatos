import {Form, Field} from "formik"

function formHandler() {
  return (
    <Form>
      <Field placeholder="Nome" name="firstName" />
      <Field placeholder="Sobrenome" name="lastName" />
      <Field placeholder="Apelido" name="nickname" />
      <Field placeholder="E-mail" name="email" type="email" />
      <Field placeholder="Telefone" name="phoneNumber" />
      <button type="submit">Enviar</button>
    </Form>
  );
}

export default formHandler
