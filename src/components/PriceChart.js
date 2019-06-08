import React from "react";
import { connect } from "react-redux";
import { Link, Switch, Route } from "react-router-dom";
import styled from 'styled-components';

import Bitcoin from './cryptocurrencies/Bitcoin';
import Ethereum from './cryptocurrencies/Ethereum';
import BitcoinCash from './cryptocurrencies/BitcoinCash';

const PriceChart = () => {
	return (
		<main className="content">
		  <div>
				<Link to="/price-chart/bitcoin">Bitcoin</Link>
				<Link to="/price-chart/ethereum">ETH</Link>
				<Link to="/price-chart/bitcoin-cash">BTH</Link>
			</div>
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