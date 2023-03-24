import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      // expects an object of item
      toast.info("Item Added to Cart");
      state.items.push(action.payload);
      state.total = calculateTotal(state.items);
      // save to storage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      // action.payload = id (NUMBER)
      toast.info("Item Removed from Cart");
      const newState = state.items.filter((item) => item.id !== action.payload);
      state.items = [...newState];
      state.total = calculateTotal(state.items);
      // save to storage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    // load items from local storage
    loadItems: (state, action) => {
      // expects an array
      state.items = action.payload;
      state.total = calculateTotal(state.items);
    },
  },
});

function calculateTotal(items) {
  // items array
  let total = 0;
  // if no items in cart
  if (items.length === 0) {
    return total;
  }
  // calculate total
  items.forEach((item) => (total += item.price));
  return total.toFixed(2);
}

export const { addItem, removeItem, loadItems } = cartSlice.actions;

export default cartSlice.reducer;
