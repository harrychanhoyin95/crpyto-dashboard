import React from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from 'styled-components';

import { getCurrency } from "../actions";
import Chart from './Chart';

const CenterProgress = styled.div`
	text-align: center;
`;


class PriceChart extends React.Component {
	componentDidMount() {
		this.props.getCurrency();
	}

	render() {
		if (this.props.priceChart.currency === null) {
			return (
				<CenterProgress>
					<CircularProgress />
				</CenterProgress>
			)
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
	{ getCurrency }
)(PriceChart);