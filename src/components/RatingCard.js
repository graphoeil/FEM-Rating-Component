// Imports
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setShowThankCard } from "../store/features/ratingSlice";
import star from "../images/icon-star.svg";
import thankYou from "../images/illustration-thank-you.svg";
import RatingCardBtn from "./RatingCardBtn";

// Component
const RatingCard = () => {

	// Store
	const { ratings, showThankCard, rating } = useSelector((store) => { return store.rating; });

	// Dispatch
	const dispatch = useDispatch();

	// Return
	return(
		<Wrapper className="radialGradiant">
			<div className={ `inner ${ showThankCard ? 'showBack' : '' }` }>

				{/* Front */}
				<div className="front">
					<div className="star">
						<img src={ star } alt="orange star" />
					</div>
					<h2>How did we do ?</h2>
					<p>Please let us know how we did with your support request. 
						All feedback is appreciated to help us improve our offering !</p>
					<div className="ratingCardBtns">
						{
							ratings.map((rating) => {
								return <RatingCardBtn key={ rating } score={ rating }/>
							})
						}
					</div>
					<button className="submit" disabled={ !rating } onClick={ () => { dispatch(setShowThankCard()); } }>
						Submit
					</button>
				</div>
				{/* Front */}

				{/* Back */}
				<div className="back">
					<img src={ thankYou } alt="iphone with a ticket" />
					<div className="score">
						<p>You selected { rating } out of 5</p>
					</div>
					<h3>Thank you !</h3>
					<p>We appreciate you taking the time to give a rating. 
						If you ever need more support, don’t hesitate to get in touch !</p>
				</div>
				{/* Back */}

			</div>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	position: relative;
	width: calc(100% - 30px);
	max-width: 400px;
	height: 350px;
	margin: 15px auto;
	padding: 20px;
	border-radius: 10px;
	background-position: top;
	background-size: 200%;
	perspective: 1000px;
	overflow: hidden;
	.inner{
		position: relative;
		width: 100%;
		height: 100%;
		transition: 0.5s transform ease-in-out;
		transform-style: preserve-3d;
		&.showBack{
			transform: rotateY(180deg);
		}
		.front, .back{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			backface-visibility: hidden;
			/* Bug with backface-visibility in firefox, 
			must add transform... */
			transform: rotateX(0);
		}
		.front{
			.star{
				width: 40px;
				height: 40px;
				margin: 0 0 25px 0;
				background-color: var(--darkGrey);
				border-radius: 50%;
				line-height: 45px;
				text-align: center;
			}
			h2{
				font-weight: 700;
				font-size: 24px;
				color: white;
				margin: 0 0 20px 0;
			}
			p{
				font-size: 15px;
				line-height: 1.5em;
				color: var(--lightGrey);
				margin: 0 0 20px 0;
			}
			.ratingCardBtns{
				display: flex;
				justify-content: space-between;
				margin: 0 0 20px 0;
			}
			.submit{
				display: block;
				width: 100%;
				border-radius: 20px;
				background-color: var(--orange);
				color: white;
				padding: 15px;
				border: none;
				text-transform: uppercase;
				font-size: 15px;
				letter-spacing: 2px;
				font-weight: 700;
				&:disabled{
					cursor: not-allowed;
				}
			}
		}
		.back{
			top: 50%;
			height: auto;
			transform: rotateY(180deg) translateY(-50%);
			text-align: center;
			img{
				margin: 0 0 20px 0;
			}
			.score{
				margin: 0 0 25px 0;
				p{
					display: inline-block;
					width: auto;
					padding: 10px 20px;
					border-radius: 20px;
					background-color: var(--darkGrey);
					color: var(--orange);
					font-size: 15px;
				}
			}
			h3{
				font-weight: 700;
				font-size: 24px;
				color: white;
				margin: 0 0 15px 0;
			}
			p{
				display: block;
				width: 80%;
				margin: 0 auto;
				font-size: 15px;
				line-height: 1.5em;
				color: var(--lightGrey);
			}
		}
	}
`;

// Export
export default RatingCard;