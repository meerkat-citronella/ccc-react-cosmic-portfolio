import styled from "styled-components";
import { media } from "./constants.js";

export const StyledApp = styled.main`
	text-align: center;
	display: flex;

	.App-logo {
		animation: App-logo-spin infinite 20s linear;
		height: 80px;
	}

	.app-footer {
		position: fixed;
		bottom: 0px;
		left: 0px;
		width: 100%;
		font-size: 13px;
		background: #000;
		opacity: 0.9;
		filter: alpha(opacity=80);
		color: #fff;
		padding-bottom: 5px;
		text-decoration: none;
		height: 25px;
		box-shadow: 1px 0 2px #000000;
		z-index: 2000;
	}

	.home-view {
		position: fixed;
		bottom: 60px;
		display: flex;
		width: 100%;
		height: 20px;
		justify-content: center;
	}

	.home-tag-line {
		margin-left: 43px;
		z-index: 1;
	}

	.main-view {
		width: 130%;
		display: flex;
		margin-left: -30%;
		height: 100vh;
	}

	@media ${media.PHONE} {
		.main-view {
			width: 100%;
			margin-left: 0;
		}
	}

	.contact-form {
		margin-left: 30%;
		margin-bottom: 25px;
		padding-left: 60px;
		padding-right: 60px;
	}

	@media ${media.PHONE} {
		.contact-form {
			margin-left: 0;
			margin-bottom: 25px;
			padding-left: 10px;
			padding-right: 10px;
		}

		.contact-button {
			width: 100%;
		}
	}

	.contact-form {
		text-align: left;
	}

	.graph-section {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	/* TODO: Will need to change for smaller screens */
	.graph-wrapper {
		width: 500px;
		height: 500px;
	}

	@media only screen and (min-width: 320px) and (max-width: 430px) {
		.graph-wrapper {
			width: 300px;
			height: 300px;
		}
	}

	@media only screen and (min-width: 431px) and (max-width: 540px) {
		.graph-wrapper {
			width: 400px;
			height: 400px;
		}
	}

	@media only screen and (min-width: 601px) and (max-width: 680px) {
		.graph-wrapper {
			width: 300px;
			height: 300px;
		}
	}

	@media only screen and (min-width: 681px) and (max-width: 750px) {
		.graph-wrapper {
			width: 350px;
			height: 350px;
		}
	}

	@media only screen and (min-width: 751px) and (max-width: 810px) {
		.graph-wrapper {
			width: 400px;
			height: 400px;
		}
	}

	@media only screen and (min-width: 811px) and (max-width: 900px) {
		.graph-wrapper {
			width: 450px;
			height: 450px;
		}
	}

	.about-header {
		font-size: 20px;
		text-transform: uppercase;
	}

	.graph-wrapper {
		align-self: center;
	}

	.card-description {
		word-break: break-word;
	}

	.flex-container {
		display: flex;
		flex-wrap: wrap;
	}

	.masonry-grid {
		column-count: 2;
		column-gap: 1em;
	}

	@media (max-width: 800px) {
		.masonry-grid {
			column-count: 1;
		}
	}

	@media (min-width: 801px) and (max-width: 1100px) {
		.masonry-grid {
			column-count: 2;
		}
	}

	@media (min-width: 1101px) and (max-width: 1400px) {
		.masonry-grid {
			column-count: 3;
		}
	}

	.full-height {
		height: 100%;
	}

	.flex-content-around {
		justify-content: space-around;
	}

	.flex-item,
	.ui.card,
	.ui.cards > .card {
		display: inline-block;
		width: 100%;
		margin: 10px 0;
	}

	.portfolio-tag {
		margin: 5px;
	}

	.logos {
		min-width: 100px;
		max-width: 150px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 15px;
	}

	ul {
		list-style: none;
	}

	img {
		width: 100%;
	}

	.App-title {
		font-size: 1.5em;
	}

	.App-intro {
		font-size: large;
	}

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
