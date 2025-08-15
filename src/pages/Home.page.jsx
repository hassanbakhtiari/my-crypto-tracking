/** @format */

/** @format */

import React, { useEffect, useState } from 'react';
import Spinner from '../components/ui/Spinner.component.jsx';
import axios from 'axios';
import { baseUrl } from '../constants/api.js';
import CoinsComponent from '../components/coins/Coins.component.jsx';

const HomePage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		setLoading(true);
		axios(baseUrl)
			.then((response) => {
				setLoading(false);
				console.log(response.data);
				setData(response.data);
			})
			.catch((error) => {
				setError('an error occurs');
			});
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 text-center">
					<h1>Crypto Tracking</h1>
					<h4>A place to manage of your trade information and action</h4>
					<h4>Do'nt forget to alwayse asset and risk managment!!!!!!!!!</h4>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					{loading ? (
						<Spinner />
					) : error !== '' ? (
						<h1>{error}</h1>
					) : (
						<CoinsComponent data={data} />
					)}
				</div>
			</div>

			{/* <Spinner /> */}
		</div>
	);
};

export default HomePage;
