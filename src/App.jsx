import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "./redux/contactsOps.js";
import { selectError, selectLoading } from "./redux/contactsSlice.js";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <div>LOADING...</div>}
      {!error ? <ContactList /> : <div>ERROR</div>}
    </div>
  );
}

export default App;
