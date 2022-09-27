function ContactCard({
  contact: { email, firstName, lastName, phoneNumber, nickname },
}) {
  return (
    <div>
      <h2>{nickname || firstName}</h2>
      <h3>{`${firstName} ${lastName || ""}`}</h3>
      <h3>{`Number: ${phoneNumber}`}</h3>
      <h3>{`E-mail: ${email}`}</h3>
    </div>
  );
}

export default ContactCard