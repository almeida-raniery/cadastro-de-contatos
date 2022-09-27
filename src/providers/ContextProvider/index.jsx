import { ContactApiProvider } from "../ContactProvider";
import { SessionProvider } from "../SessionProvider";
import { UserApiProvider } from "../UserProvider";

function ContextProvider({ children }) {
  return (
    <>
      <ContactApiProvider>
        <UserApiProvider>
          <SessionProvider>
            {children}
          </SessionProvider>
        </UserApiProvider>
      </ContactApiProvider>
    </>
  );
}

export default ContextProvider
