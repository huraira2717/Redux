import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        update(state, action) {
            const { id, updatedItem } = action.payload;
            const index = state.findIndex(item => item.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...updatedItem };
            }
        }
    }
});

export const { add, remove, update } = cartSlice.actions;  
export default cartSlice.reducer;
