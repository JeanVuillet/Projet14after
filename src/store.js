import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const mySlice = createSlice({
  name: "userSlice",
  initialState: { user: [] },
  reducers: {
    addUser: (currentState, action) => {
      console.log(currentState);
      return { 
        ...currentState, user: [...currentState.user, action.payload] 
      };
    },
  },
});

export function getUser(store) {
  return store.userSlice;
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, mySlice.reducer);

const store = configureStore({
  reducer: {
    userSlice: persistedReducer,
  },
});

export const persistor = persistStore(store);

export { store };
