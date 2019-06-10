import React from "react";
import { connect } from 'react-redux';
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from 'styled-components';

import Chart from '../Chart';
import { getEthereum, getExchangeRate } from "../../actions";

const CenterProgress = styled.div`
  margin-top: 100px;
	text-align: center;
`;

const Wrapper = styled.div`
  margin-top: 20px;
`;

const PriceWrapper = styled.div`
	display: flex;
	font-size: 1.2em;
	font-weight: bold;
`;

const ImageWrapper = styled.div`
  margin-right: 5px;
`;

const StyledP = styled.p`
  margin: 0;
`;

const CurrentPrice = styled.span`
  margin-right: 10px;
`;

const RedText = styled.span`
	color: #F03800;
	font-size: 0.9em;
`;

const GreenText = styled.span`
	color: #5CBB26;
	font-size: 0.9em;
`;

class Ethereum extends React.Component {
	componentDidMount() {
		this.props.getEthereum();
		this.props.getExchangeRate();
	}

	renderHKD() {
		const exchangeRate = this.props.exchangeData.exchangeRate.USD_HKD;

		if (this.props.settings.defaultCurrency === 'USD') {
			return 	<CurrentPrice>US${this.props.priceChart.currency[0].price_close}</CurrentPrice>
		}

		if (this.props.settings.defaultCurrency === 'HKD') {
			return 	<CurrentPrice>HK${Math.round((this.props.priceChart.currency[0].price_close) * exchangeRate * 100) / 100 } </CurrentPrice>
		}
	}

	renderPriceAndPercentage(price) {
		const openPrice = price[price.length - 1].price_close;
		const closePrice = price[0].price_close
    const percentage = Math.round(((closePrice - openPrice) / openPrice) * 10000) /100;
		
		if (percentage > 0) {
			return (
				<div>
					<StyledP>
						Ethereum Price(ETH)
					</StyledP>
					<StyledP>		
						{this.renderHKD()}
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" className="price-arrow">
						  <path fill="#5CBB26" fillRule="evenodd" d="M6 0L0 11h12L6 0z"></path>
						</svg>
						<GreenText>{percentage}%</GreenText>
					</StyledP>
				</div>
			)
		} else if (percentage < 0) {
			return (
				<div>
					<StyledP>
					  Ethereum Price(ETH)
					</StyledP>
					<StyledP>		
					  {this.renderHKD()}
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" className="price-arrow">
							<path fill="#F03800" fillRule="evenodd" d="M6 11l6-11H0z" />
						</svg>
						<RedText>{percentage}%</RedText>
					</StyledP>
				</div>
			)
		} else {
			return (
			  <div>
					<StyledP>
					  Ethereum Price(ETH)
					</StyledP>
					<StyledP>		
					  {this.renderHKD()}
						{percentage}%
					</StyledP>
			  </div>
			)
		}
	}

	render() {
		console.log(this.props)
		if (this.props.priceChart.currency === null) {
			return (
				<CenterProgress>
					<CircularProgress />
				</CenterProgress>
			)
		} else {
		  return (
				<Wrapper>
					<PriceWrapper>
						<ImageWrapper>
							<img src="https://img.icons8.com/color/48/000000/ethereum.png" alt="ethereum" />
						</ImageWrapper>
						{this.renderPriceAndPercentage(this.props.priceChart.currency)}
					</PriceWrapper>
					<Chart />
				</Wrapper>
			);
		}
	}
};

const mapStateToProps = state => {
	return { 
		priceChart: state.priceChart,
		settings: state.settings,
		exchangeData: state.exchangeData
	};
}

export default connect (
  mapStateToProps,
	{ getEthereum, getExchangeRate }
)(Ethereum);