/** @format */

import React from 'react';
import spinnerImg from '../../assets/images/spinner.svg';

const Spinner = () => {
	return (
		<div className="d-flex justify-content-center align-items-centec">
			<img src={spinnerImg} alt="spinner" />
		</div>
	);
};

export default Spinner;
