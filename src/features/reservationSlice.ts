import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: string[];
};

const initialState: InitialState = {
  value: [],
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
