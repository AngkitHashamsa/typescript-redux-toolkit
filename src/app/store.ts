import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "../features/reservationSlice";
import customerSlice from "../features/customerSlice";

export const store = configureStore({
  reducer: {
    reservation: reservationSlice,
    customer: customerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
