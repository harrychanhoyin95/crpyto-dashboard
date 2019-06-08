import React from "react";
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineMarkSeries, Hint } from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import { connect } from 'react-redux';

import { showTooltip, closeTooltip, getCurrency, getDatapoint } from "../actions";

class Chart extends React.Component {
	componentDidMount() {
		this.props.getCurrency()
	};

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
			<XYPlot
			  xType="time"
				width={500}
				height={300}
			>
				<HorizontalGridLines />
				<VerticalGridLines />
				<LineMarkSeries 
					data={this.data}
					lineStyle={{stroke: '#7CB5EC'}}
					markStyle={{stroke: '#0A63A4', fill: '#0A63A4'}}
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
							  HK${this.props.datapoint.y} <br />
								<span style={{opacity: '0.7', fontSize: '0.8em', fontWeight: 'normal'}}>
									{this.parseDate(this.props.datapoint.x)} <br />
									{(this.props.datapoint.x).getHours()}:00:00 GMT+8
								</span>
							</p>
						</div>
				  </Hint>) : null}
				<XAxis tickTotal={4} />
				<YAxis tickTotal={6} />
			</XYPlot>
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
	{ showTooltip, closeTooltip, getCurrency, getDatapoint }
)(Chart);