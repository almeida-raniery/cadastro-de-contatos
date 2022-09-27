import { useState } from "react";
import Modal from "react-modal";
import ContactForm from "../../Forms/Contact Form";

function ContactModal({ contact }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>{isEditing ? "Editar contato" : "Criar novo contato"}</h2>
      <ContactForm initialValues={isEditing && contact} />
    </Modal>
  );
}
