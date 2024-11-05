import { configureStore } from "@reduxjs/toolkit";

import { usersReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: usersReducer,
    filters: filtersReducer,
  },
});

export default store;
