import { useState } from "react";
import Modal from "react-modal";
import ContactForm from "../../Forms/Contact Form";

function ContactModal({ contact, isOpen, setIsOpen, isEditing, setIsEditing }) {
  function closeModal() {
    setIsEditing(false)
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>{isEditing ? "Editar contato" : "Criar novo contato"}</h2>
      <ContactForm initialValues={isEditing && contact} />
    </Modal>
  );
}

export default ContactModal