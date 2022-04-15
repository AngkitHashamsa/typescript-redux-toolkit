import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Customer = {
  id: string;
  customer: string;
  food: string[];
};

type customerState = {
  value: Customer[];
};

type AddFood = {
  id: string;
  food: string;
};

const initialState: customerState = {
  value: [],
};

const customerSlice = createSlice({
  name: "customerSlice",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFood: (state, action: PayloadAction<AddFood>) => {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, food: item.food.push(action.payload.food) };
        }
        return item;
      });
    },
  },
});

export const { addCustomer, addFood } = customerSlice.actions;
export default customerSlice.reducer;
