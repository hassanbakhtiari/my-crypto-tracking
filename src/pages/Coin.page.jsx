/** @format */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { detailsUrl } from '../constants/api';
import axios from 'axios';
import CoinDetailsComponent from '../components/CoinDetails.component.JSX';
import Spinner from '../components/ui/Spinner.component';
import CoinsComponent from '../components/coins/Coins.component';

const CoinPage = () => {
	const paramObject = useParams();
	const url = detailsUrl(paramObject.id);
	// console.log(url);
	const [coin, setCoin] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		setLoading(true);
		axios(url)
			.then((response) => {
				setLoading(false);
				console.log(response.data);
				setCoin(response.data);
			})
			.catch((error) => {
				setError('an error occurs');
			});
	}, []);

	return (
		<div className="container">
			{loading ? (
				<Spinner />
			) : error !== '' ? (
				<h1>{error}</h1>
			) : (
				<CoinDetailsComponent coin={coin} />
			)}
		</div>
	);
};

export default CoinPage;
