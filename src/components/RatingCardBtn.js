// Imports
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../store/features/ratingSlice";

// Component
const RatingCardBtn = ({ score }) => {

	// Store
	const { rating } = useSelector((store) => { return store.rating; });

	// Dispatch
	const dispatch = useDispatch();

	// Return
	return(
		<Wrapper className={ rating === score && 'selected' } onClick={ () => { dispatch(setRating(score)); } }>
			{ score }
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.button`
	display: inline-block;
	width: 40px;
	height: 40px;
	background-color: var(--darkGrey);
	color: white;
	line-height: 40px;
	font-family: var(--overpass);
	font-size: 15px;
	border: none;
	padding: 0;
	border-radius: 50%;
	transition: 0.35s background ease-in-out;
	&.selected{
		background-color: var(--orange) !important;
	}
	html.no-touchevents &:hover{
		background-color: var(--lightGrey);
	}
`;

// Export
export default RatingCardBtn;