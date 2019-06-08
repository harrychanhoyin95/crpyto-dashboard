import React from "react";
import { connect } from "react-redux";

import { getCurrency, selectCurrecny } from "../actions";
import Chart from './Chart';

class PriceChart extends React.Component {
	componentDidMount() {
		this.props.getCurrency();
	}

	render() {
		if (this.props.priceChart.currency === null) {
			return <div>Loading...</div>
		} else {
			return (
			<main className="content">
				<Chart />
				<select>
					<option>BTC</option>
				</select>
			</main>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return { priceChart: state.priceChart }
}

export default connect(
	mapStateToProps,
	{ getCurrency, selectCurrecny }
)(PriceChart);