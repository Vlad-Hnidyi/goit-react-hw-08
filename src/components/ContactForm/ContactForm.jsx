import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

export const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    toast.success("Contact added");
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="nameFieldId">
          Name
        </label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={nameFieldId}
          placeholder="James Bond"
        />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />

        <label className={css.label} htmlFor="phoneFieldId">
          Number
        </label>
        <Field
          className={css.input}
          type="phone"
          name="number"
          id={phoneFieldId}
          placeholder="+XXX XX-XXX-XXXX"
        />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />

        <div className={css.button}>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
