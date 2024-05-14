import { configureStore } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
  name: "userSlice",
  initialState: {},
  reducers: {
    addUser: (currentState, action) => {
      {
        return { ...currentState, ...action.payload };
      }
    },
  },
});

export function getUser(store) {
  return store.userSlice;
}

const store = configureStore({
  reducer: {
    userSlice: mySlice.reducer,
  },
});
// Ajoutez ici d'autres options de configuration du store si nécessaire

export { store };
