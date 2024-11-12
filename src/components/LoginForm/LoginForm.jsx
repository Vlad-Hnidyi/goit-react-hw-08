import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { login } from "../../redux/auth/operations";

import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  const loginSchema = Yup.object({
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
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className={css.form}>
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
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
