import React from "react";
import { FlexibleWidthXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineMarkSeries, Hint } from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { showTooltip, closeTooltip, getDatapoint } from "../actions";

const StyledXYPlot = styled(FlexibleWidthXYPlot)`
	margin: 0 auto;
	padding: 30px 0;
`;

class Chart extends React.Component {
	data = (this.props.currencies).map(currency => {
		return {x: new Date(currency.time_period_start), y: currency.price_close}
	})

	tooltipPosition() {
		return {x: this.props.datapoint.x , y: this.props.datapoint.y}
	}

	parseDate(time) {
		var year = time.getFullYear();
		var month = time.getMonth() + 1;
		var date = time.getDate();

		return (
			`${date}/${month}, ${year}`
		)
	}

	render() {
		return (
			<StyledXYPlot
				xType="time"
				margin={{left: 50}}
				height={300}
			>
				<HorizontalGridLines />
				<VerticalGridLines />
				<LineMarkSeries 
					data={this.data}
					lineStyle={{stroke: '#737373'}}
					markStyle={{stroke: '#444444', fill: '#444444'}}
					onValueMouseOver={(datapoint) => {
						this.props.showTooltip();
						this.props.getDatapoint(datapoint);
					}}
					onValueMouseOut={() => {this.props.closeTooltip()}}
				/>
				{this.props.isShownTooltip ? (
				  <Hint value={this.tooltipPosition()}>
						<div style={{background: '#e2e2e2', padding: '0 10px'}}>
							<p style={{marginTop: '1.8em', color: 'black', fontWeight: 'bold', padding: '5px 0'}}>
							  US${this.props.datapoint.y} <br />
								<span style={{opacity: '0.7', fontSize: '0.8em', fontWeight: 'normal'}}>
									{this.parseDate(this.props.datapoint.x)} <br />
									{(this.props.datapoint.x).getHours()}:00:00 GMT+8
								</span>
							</p>
						</div>
				  </Hint>) : null}
				<XAxis tickTotal={4} />
				<YAxis tickTotal={6} />
			</StyledXYPlot>
		);
	}
}

const mapStatetoProps = state => {
	return { 
		currencies: state.priceChart.currency,
		isShownTooltip: state.priceChart.showTooltip,
		datapoint: state.priceChart.datapoint
	}
}

export default connect (
	mapStatetoProps,
	{ showTooltip, closeTooltip, getDatapoint }
)(Chart);