import { useState } from "react";
import { createContext, useContext } from "react";
import requestApi from "../services/API";

const UserContext = createContext();

export function UserApiProvider({ children }) {
  async function createUser(data) {
    delete data.passwordConfirm;

    const resp = await requestApi.post("/users", data);

    return resp;
  }

  async function patchUser(data, session) {
    const { token, userId } = session;

    const resp = await requestApi.patchAuth(`/users/${userId}`, data, token);

    return resp;
  }

  async function getUser(session) {
    const { token, userId } = session;

    const resp = await requestApi.getAuth(`/users/${userId}`, token);

    return resp;
  }

  async function deleteUser(session) {
    const { token, userId } = session;

    await requestApi.deleteAuth(`/users/${userId}`, token);
  }

  return (
    <UserContext.Provider
      value={{
        createUser,
        getUser,
        patchUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserApi = () => useContext(UserContext);
