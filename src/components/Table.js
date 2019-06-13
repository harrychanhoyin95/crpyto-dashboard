import React from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';
import numeral from 'numeral';

import { getTableArray } from '../actions';

const TableWrapper = styled.table`
	border: 2px solid rgb(240,240,240);
	border-spacing: 0;
	border-radius: 5px;
  width: 100%;
  white-space: nowrap;
`;

const TableHead = styled.thead`
	border-collapse: separate;
	border-spacing: 0;
`

const TableLabelRow = styled.tr`
  text-align: center;
`;

const TableLabel = styled.th`
	font-weight: bold;
	background-color: rgb(240, 240, 240);
	padding: 12px;	

	&:first-child {
		text-align: center;
	}

	&:nth-child(2) {
		text-align: left
	}

	&:nth-child(n+3) {
		text-align: right;
	}

	@media only screen and (max-width: 767px) {
		&:nth-child(1),
		&:nth-child(4),
		&:nth-child(5),
		&:nth-child(6),
		&:nth-child(7) {
			display: none;
		}
	}
`;

const TableData = styled.td`
  padding: 12px;	

	&:first-child {
		text-align: center;
	}

	&:nth-child(2) {
		text-align: left
	}

	&:nth-child(n+3) {
		text-align: right;
	}
	
	@media only screen and (max-width: 767px) {
		padding: 12px 0;

		&:nth-child(1),
		&:nth-child(4),
		&:nth-child(5),
		&:nth-child(6),
		&:nth-child(7) {
			display: none;
		}
	}
`;

const GreenText = styled.span`
  color: green;
`

const RedText = styled.span`
  color: red;
`

class Table extends React.Component {
	componentDidMount() {
		this.props.getTableArray()
	}

	renderWholeNumber(number) {
	  return numeral(number).format('$0,0.00')
	}

	renderBigNumber(number) {
	  return numeral(number).format('$0.00a')
	}

	renderPercentage(number) {
		var newNumber = numeral(number).format('0.00%');

		if (number > 0) {
			return <GreenText>{newNumber}</GreenText>
		} else if (number < 0) {
			return <RedText>{newNumber}</RedText>
		} else {
			return {newNumber}
		}
	}

	renderTable() {
		console.log(this.props.tableData.data)
		return (
			<TableWrapper>
				<TableHead>
					<TableLabelRow>
						<TableLabel colSpan={1}>Rank</TableLabel>
						<TableLabel colSpan={2}>Name</TableLabel>
						<TableLabel colSpan={1}>Price</TableLabel>
						<TableLabel colSpan={1}>Market Cap</TableLabel>
						<TableLabel colSpan={1}>VWAP (24h)</TableLabel>
						<TableLabel colSpan={1}>Supply</TableLabel>
						<TableLabel colSpan={1}>Volume (24h)</TableLabel>
						<TableLabel colSpan={1}>Change (24h)</TableLabel>
					</TableLabelRow>
				</TableHead>
				<tbody>
          {
						(this.props.tableData.data).map(item => {
							return (
								<tr key={item.name}>
									<TableData>{item.rank}</TableData>
									<TableData colSpan={2}>{item.name}</TableData>
									<TableData>{this.renderWholeNumber(item.priceUsd)}</TableData>
									<TableData>{this.renderBigNumber(item.marketCapUsd)}</TableData>
									<TableData>{this.renderWholeNumber(item.vwap24Hr)}</TableData>
									<TableData>{this.renderBigNumber(item.supply)}</TableData>
									<TableData>{this.renderBigNumber(item.volumeUsd24Hr)}</TableData>
									<TableData>{this.renderPercentage(item.changePercent24Hr / 100)}</TableData>
								</tr>
							);
						})
					}
				</tbody>
			</TableWrapper>
		);
	}

	render() {
		if (this.props.tableData === null) {
			return null
		} else {
			return (
				<div className="content">
					{this.renderTable()}
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => {
  return { tableData: state.table.tableData}
}

export default connect(
	mapStateToProps,
	{ getTableArray }
)(Table);