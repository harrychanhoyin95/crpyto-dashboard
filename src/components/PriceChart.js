import React from "react";
import { connect } from "react-redux";
import { Link, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import ErrorIcon from "@material-ui/icons/ErrorOutline";

import Bitcoin from './cryptocurrencies/Bitcoin';
import Ethereum from './cryptocurrencies/Ethereum';
import BitcoinCash from './cryptocurrencies/BitcoinCash';
import { signIn } from '../actions';

const ErrorP = styled.div`
	display: flex;
	background-color: #FFCEC6;
	color: rgba(0, 0, 0, 0.54);
	text-align: center;
	justify-content: center;
	align-items: center;
	padding: 20px;
`;

const StyledErrorIcon = styled(ErrorIcon)`
	fill: rgba(0, 0, 0, 0.54) !important;
	margin-right: 10px;
`;

const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 5px;

	@media (min-width: 768px) {
		width: 70%;
		margin: 0 auto;
	}
`;

const StyledLink = styled(Link)`
	display: grid;
	grid-gap: 10px;
	justify-items: center;
	border: 1px solid #737373;
	border-radius: 10px;
	color: #000000;
	text-align: center;
	text-decoration: none;

	&:hover {
		background-color: #c5c5c5;
	}

	@media (min-width: 768px) {
		display: block;
		justify-items: initial;
		padding: 10px 0;
	}
`;

const CryptoIcon = styled.img`
	margin-top: 10px;	

  @media (min-width: 768px) {
		vertical-align: middle;
		margin-top: 0;
		margin-right: 10px;
	}
`;

const CryptoText = styled.span`
  padding-bottom: 10px;
  font-weight: bold;
  text-decoration: none;
`;

const PriceChart = (props) => {
	if (props.auth.isSignedIn === null || props.auth.isSignedIn === false) {
		return (
			<ErrorP>
				<StyledErrorIcon />
				Please login in your Google account to access the price chart
			</ErrorP>
		)
	} else {
		return (
			<main className="content">
				<GridWrapper>
					<StyledLink to="/price-chart/bitcoin" >
						<CryptoIcon src="https://img.icons8.com/color/48/000000/bitcoin.png" />
						<CryptoText>Bitcoin</CryptoText>
					</StyledLink>
					<StyledLink to="/price-chart/ethereum">
						<CryptoIcon src="https://img.icons8.com/color/48/000000/ethereum.png" />
						<CryptoText>Ethereum</CryptoText>
					</StyledLink>
					<StyledLink to="/price-chart/bitcoin-cash">
						<CryptoIcon src="https://i.imgur.com/MJ4hg8G.png" />
						<CryptoText>BitcoinCash</CryptoText>
					</StyledLink>
				</GridWrapper>
				<Switch>
					<Route path="/" exact />
					<Route path="/price-chart/bitcoin" component={Bitcoin} />
					<Route path="/price-chart/ethereum" component={Ethereum} />
					<Route path="/price-chart/bitcoin-cash" component={BitcoinCash} />
				</Switch>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		auth: state.auth,
		priceChart: state.priceChart
	}
}

export default connect(
	mapStateToProps,
	{ signIn }
)(PriceChart);