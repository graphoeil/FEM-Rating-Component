// Imports
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./css/displayMain.css";
import { setIsTouch } from "./store/features/ratingSlice";
import RatingCard from "./components/RatingCard";

// Modernizr
const Modernizr = window.Modernizr;

// Component
const App = () => {

	// Dispatch
	const dispatch = useDispatch();

	// Is touch ?
	useEffect(() => {
		if (Modernizr.touchevents){
			dispatch(setIsTouch());
		}
	},[dispatch]);

	// Return
	return(
		<main>
			<RatingCard/>
		</main>
	);

};

// Export
export default App;