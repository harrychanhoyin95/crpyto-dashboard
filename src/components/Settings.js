import React from "react";
import { connect } from "react-redux";
import Select from "react-select";

import { setHKD, setUSD } from "../actions";

const optionStyles = {
	option: (provided) => ({
		...provided,
		backgroundColor: '#FFFFFF',
		color: '#000000'
	})
}

const options = [
	{ value: 'USD', label: 'USD' },
  { value: 'HKD', label: 'HKD' }
];

const Settings = (props) => {
	const onValueChange = (selected) => {
		if (props.settings.defaultCurrency !== selected.value) {
			selected.value === 'USD' ? props.setUSD() : props.setHKD();
		}
	};

	return (
		<div>
			<p>Default Currency</p>
			<Select 
			  styles={optionStyles}
				options={options} 
				onChange={onValueChange}
				defaultValue={{ value: props.settings.defaultCurrency, label: props.settings.defaultCurrency }}
			/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return { settings: state.settings }
}

export default connect(
	mapStateToProps,
	{ setHKD, setUSD }
)(Settings);