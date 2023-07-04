// import {createWrapper, HYDRATE, MakeStore} from "next-redux-wrapper";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ActionWithPayload, mergeReducer } from "./reducer";
import State from "../../state/index";
import { IS_DEV } from "../env";

const reducer = mergeReducer([
  State.User.UserReducer,
  State.Room.RoomPageReducer,
]);

declare global {
  type RootState = ReturnType<typeof reducer>;
}

const rootReducer = (
  state: RootState | undefined,
  action: ActionWithPayload
) => {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, ...action.payload };
    default: {
      return reducer(state, action);
    }
  }
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: IS_DEV,
});

// export const wrapper = createWrapper<any>(makeStore, {
//   debug: IS_DEV,
// });

export default store;
