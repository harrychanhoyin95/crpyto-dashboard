import React from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';
import numeral from 'numeral';

import { getTableArray } from '../actions';

const TableWrapper = styled.table`
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
	font-weight: normal;
	background-color: rgb(240, 240, 240);

	&:first-child {
		text-align: center;
	}

	&:nth-child(2) {
		text-align: left
	}

	&:nth-child(n+3) {
		text-align: right;
	}
`;

const TableData = styled.td`
	&:first-child {
		text-align: center;
	}

	&:nth-child(2) {
		text-align: left
	}

	&:nth-child(n+3) {
		text-align: right;
}
`;

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
		return numeral(number).format('0.00%')
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