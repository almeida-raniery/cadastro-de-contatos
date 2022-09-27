import {Form, Field} from "formik"

function formHandler() {
  return (
    <Form>
      <Field placeholder="Nome de de usuário ou email" name="username" />
      <Field placeholder="Senha" type="password" name="password" />
      <button type="submit">Entrar</button>
    </Form>
  );
}

export default formHandler
