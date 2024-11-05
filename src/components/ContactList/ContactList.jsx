import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contactsList = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {contactsList.map((contact) => {
        return (
          <li className={css.contact} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
