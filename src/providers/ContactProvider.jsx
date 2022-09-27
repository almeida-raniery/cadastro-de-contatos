import { useState } from "react";
import { createContext, useContext } from "react";
import requestApi from "../services/API";

const ContactContext = createContext();

export function ContactApiProvider({ children }) {
  const [contactList, setContactList] = useState([]);

  async function createContact(data, token) {
    delete data.passwordConfirm;

    const createResp = await requestApi.postAuth("/contacts", data, token);
    const listResp   = await requestApi.getAuth("/contacts", token);

    setContactList(listResp.data)

    return createResp.data;
  }

  async function patchContact(data, token, contactId) {
    const resp = await requestApi.patchAuth(`/contacts/${contactId}`, data, token);

    return resp.data;
  }

  async function getContact(token, contactId) {
    const resp = await requestApi.getAuth(`/contacts/${contactId}`, token);

    return resp.data;
  }

  async function listContacts(token) {
    const resp = await requestApi.getAuth(`/contacts/`, token);

    setContactList(resp.data)

    return resp.data;
  }

  async function deleteContact(token, contactId) {
    await requestApi.deleteAuth(`/contacts/${contactId}`, token);
  }

  return (
    <ContactContext.Provider
      value={{
        createContact,
        getContact,
        patchContact,
        deleteContact,
        listContacts,
        contactList
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export const useContactApi = () => useContext(ContactContext);