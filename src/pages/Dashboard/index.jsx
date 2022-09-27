import { useEffect } from "react";
import ContactCard from "../../components/Contact Card";
import AppHeader from "../../components/Header";
import { useContactApi } from "../../providers/ContactProvider";
import { useSession } from "../../providers/SessionProvider";

function DashboardPage() {
  const { contactList, listContacts } = useContactApi();
  const { isLoggedIn, loginInfo } = useSession()

  useEffect(() => {
    if (!isLoggedIn) return

    async function getContacts() {
      await listContacts(loginInfo.token)
    }

    getContacts()
  },[loginInfo]);

  return (
    <section>
      <AppHeader />
      <ul>
        {contactList.map((contact, index) => (
          <li key={index}>
            <ContactCard contact={contact} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DashboardPage
