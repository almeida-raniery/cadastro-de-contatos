import {Form, Field} from "formik"

function formHandler() {
  return (
    <Form>
      <Field placeholder="Nome" name="contactInfo.firstName" />
      <Field placeholder="Sobrenome" name="contactInfo.lastName" />
      <Field placeholder="Nome de de usuário" name="username" />
      <Field placeholder="E-mail" name="email" type="email" />
      <Field placeholder="Senha" type="password" name="password" />
      <Field
        placeholder="Confirme a senha"
        type="password"
        name="passwordConfirm"
      />
      <Field placeholder="Telefone" name="contactInfo.phoneNumber" />
      <button type="submit">Cadastrar</button>
    </Form>
  );
}

export default formHandler
