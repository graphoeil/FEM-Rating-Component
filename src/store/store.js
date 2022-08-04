// Imports
import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "./features/ratingSlice";

// Store
const store = configureStore({
	reducer:{
		rating:ratingReducer
	}
});

// Export
export default store;