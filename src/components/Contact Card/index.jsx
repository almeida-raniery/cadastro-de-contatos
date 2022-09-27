function ContactCard({
  contact,
  setIsModalOpen,
  setIsEditing,
  setEditingContact,
}) {
  const { email, firstName, lastName, phoneNumber, nickname } = contact;

  function openEditModal() {
    setIsModalOpen(true);
    setIsEditing(true);
    setEditingContact(contact);
  }

  return (
    <div>
      <h2>{nickname || firstName}</h2>
      <h3>{`${firstName} ${lastName || ""}`}</h3>
      <h3>{`Number: ${phoneNumber}`}</h3>
      <h3>{`E-mail: ${email}`}</h3>
      <button onClick={openEditModal}>Atualizar</button>
    </div>
  );
}

export default ContactCard;
