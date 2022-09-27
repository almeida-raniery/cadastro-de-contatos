import { useState } from "react";
import { useEffect } from "react";
import { useSession } from "../../providers/SessionProvider";
import { useContactApi } from "../../providers/ContactProvider";
import ContactCard from "../../components/Contact Card";
import AppHeader from "../../components/Header";
import ContactModal from "../../components/Modals/Contact Modal";

function DashboardPage() {
  const { contactList, listContacts } = useContactApi();
  const { isLoggedIn, loginInfo } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) return;

    async function getContacts() {
      await listContacts(loginInfo.token);
    }

    getContacts();
  }, [loginInfo]);

  return (
    <section>
      <AppHeader />
      <ul>
        {contactList.map((contact, index) => (
          <li key={index}>
            <ContactCard
              contact={contact}
              setIsModalOpen={setIsModalOpen}
              setIsEditing={setIsEditing}
            />
          </li>
        ))}
      </ul>
      <button onClick={() => setIsModalOpen(true)}>+</button>
      <ContactModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </section>
  );
}

export default DashboardPage;
