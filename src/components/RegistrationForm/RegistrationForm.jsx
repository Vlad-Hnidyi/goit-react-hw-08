import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { register } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const registerSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name must be less than 20 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password length must be at least 8 characters")
      .required("Password is required"),
  });

  return (
    <div className={css.pageWrapper}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <Form className={css.form}>
          <label>
            Name
            <Field type="text" name="name" placeholder="jbond007" />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label>
            Email
            <Field type="email" name="email" placeholder="jbond@example.com" />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label>
            Password
            <Field type="password" name="password" placeholder="********" />
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="span"
            />
          </label>
          <button className={css.btn} type="submit">
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
