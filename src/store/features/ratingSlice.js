// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	isTouch:false,
	rating:null,
	ratings:[1,2,3,4,5],
	showThankCard:false
};

// Slice
const ratingSlice = createSlice({
	name:'rating',
	initialState,
	reducers:{
		// Is touch ?
		setIsTouch:(state) => {
			state.isTouch = true;
		},
		// Rating
		setRating:(state, action) => {
			const rating = action.payload;
			state.rating = rating;
		},
		// Show thank you card
		setShowThankCard:(state) => {
			state.showThankCard = true;
		}
	}
});

// Actions export
export const { setIsTouch, setRating, setShowThankCard } = ratingSlice.actions;

// Reducer export
export default ratingSlice.reducer;