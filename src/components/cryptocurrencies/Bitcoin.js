import React from "react";
import { connect } from 'react-redux';
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from 'styled-components';

import Chart from '../Chart';
import { getBitcoin } from "../../actions";

const CenterProgress = styled.div`
  margin-top: 100px;
	text-align: center;
`;

class Bitcoin extends React.Component {
	componentDidMount() {
		this.props.getBitcoin()
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
	{ getBitcoin }
)(Bitcoin);