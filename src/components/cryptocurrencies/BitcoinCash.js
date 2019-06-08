import React from "react";
import { connect } from 'react-redux';
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from 'styled-components';

import Chart from '../Chart';
import { getBitcoinCash } from "../../actions";

const CenterProgress = styled.div`
	text-align: center;
`;

class BitcoinCash extends React.Component {
	componentDidMount() {
		this.props.getBitcoinCash()
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
			  <Chart />
			);
		}
	}
};

const mapStateToProps = state => {
	return { priceChart: state.priceChart }
}

export default connect (
  mapStateToProps,
	{ getBitcoinCash }
)(BitcoinCash);