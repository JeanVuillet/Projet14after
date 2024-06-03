import {
	configureStore,
	createSlice,
	getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Création de la slice
export const mySlice = createSlice({
	name: "userSlice",
	initialState: { user: [] },
	reducers: {
		addUser: (currentState, action) => {
			console.log(currentState);
			return {
				...currentState,
				user: [...currentState.user, action.payload],
			};
		},
	},
});

// Fonction pour obtenir l'utilisateur
export function getUser(store) {
	return store.userSlice;
}

// Configuration de la persistance
const persistConfig = {
	key: "root",
	storage,
};

// Réducteur persistant
const persistedReducer = persistReducer(persistConfig, mySlice.reducer);

// Création du store avec le middleware personnalisé
const store = configureStore({
	reducer: {
		userSlice: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
				ignoredPaths: ["register", "rehydrate"],
			},
		}),
});

// Création du persistor
export const persistor = persistStore(store);

export { store };
