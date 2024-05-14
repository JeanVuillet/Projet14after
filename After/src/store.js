import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
  name: "userSlice",
  initialState: { user: [] }, // Note: "user" au lieu de "users"
  reducers: {
    addUser: (currentState, action) => {
      console.log(currentState);
      return { 
        ...currentState, user: [...currentState.user, action.payload] // Crée une copie du tableau avec le nouvel utilisateur
      };
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

export { store };