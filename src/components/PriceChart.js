import React from "react";
import { connect } from "react-redux";
import { Link, Switch, Route } from "react-router-dom";
import styled from 'styled-components';

import Bitcoin from './cryptocurrencies/Bitcoin';
import Ethereum from './cryptocurrencies/Ethereum';
import BitcoinCash from './cryptocurrencies/BitcoinCash';

const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	@media (min-width: 768px) {
		width: 70%;
		margin: 0 auto;
	}
`;

const StyledLink = styled(Link)`
	display: grid;
	justify-items: center;
	border: 1px solid #737373;
	color: #000000;
	text-align: center;
	text-decoration: none;

	&:first-child {
		border-right: none
	}

	&:last-child {
		border-left: none
	}

	&:hover {
		background-color: #c5c5c5;
	}

	@media (min-width: 768px) {
		display: block;
		justify-items: initial;
	}
`;

const CryptoIcon = styled.img`
  margin-top: 10px;
	margin-bottom: 10px;
	
  @media (min-width: 768px) {
		vertical-align: middle;
		margin-top: 10px;
		margin-right: 10px;
	}
`;

const CryptoText = styled.span`
  font-weight: bold;
  text-decoration: none;
`;

const PriceChart = () => {
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

const mapStateToProps = (state) => {
	return { priceChart: state.priceChart }
}

export default connect(
	mapStateToProps,
	null
)(PriceChart);