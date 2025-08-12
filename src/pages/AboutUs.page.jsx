/** @format */

import React from 'react';
import aboutImg from '../assets/images/about.png';

const AboutUsPage = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 bg-info p-3 rounded">
					<h3>About Us</h3>
				</div>
			</div>
			<div className="row align-items-center ">
				<div className="col-md-7">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit
					dolores quaerat esse tempora officia in obcaecati aperiam
					reprehenderit impedit, nobis iste provident repellat doloremque fugit
					nesciunt enim excepturi consequuntur voluptatibus et eos facere beatae
					debitis eum. Repellat delectus officiis id ducimus illo modi dolorem
					cumque vero porro unde a labore inventore veritatis earum aut nulla
					quas error, odit facilis facere dicta saepe? Iusto debitis est ex!
					Nemo laborum blanditiis neque et soluta corrupti illum enim aliquid
					esse hic temporibus incidunt, beatae expedita corporis mollitia
					voluptas quas sint ea sequi ab. Aliquam harum natus fugit placeat
					reprehenderit porro, impedit recusandae.
				</div>
				<div className="col-md-5 text-center">
					<img src={aboutImg} alt="about" className="img-fluid about-img" />
				</div>
			</div>
		</div>
	);
};

export default AboutUsPage;
