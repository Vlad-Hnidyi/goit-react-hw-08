import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectIsRefreshing } from "./redux/auth/selectors.js";
import Layout from "./components/Layout/Layout";

import Loader from "./components/Loader/Loader.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import css from "./App.module.css";
import { refreshUser } from "./redux/auth/operations.js";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <div className={css.loader}>
          <Loader />
        </div>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  restrictedTo="/contacts"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  restrictedTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  restrictedTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
