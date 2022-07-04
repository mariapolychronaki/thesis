import { combineReducers, configureStore } from '@reduxjs/toolkit'
import coachReducer from './Slices/coachSlice'
import modalReducer from './Slices/ModalSlice'
import userReducer from './Slices/UserSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const storePersistKeys = {
  user: "user"
};

const reducer = combineReducers({
  user: persistReducer({ key: storePersistKeys.user, storage }, userReducer),
  coach : coachReducer,
  modal : modalReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "store/reset") {
    state = undefined;
  }
  return reducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export const resetPersistor = () => {
  persistStore(store);
};

export default store;
