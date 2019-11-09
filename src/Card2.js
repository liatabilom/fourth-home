import React, { Component } from 'react';

import './Card2.css';

class Card2 extends Component {
	render() {
		return (
			<div className="jpmobileContent" style={{ height: 480 }}>
				<h2>
					<img
						style={{ height: 280, width: 200 }}
						className="jpmobile"
						src="https://i.imgur.com/gACoce3.png"
						alt="Japanese Mobile"
					/>
				</h2>
			</div>
		);
	}
}

export default Card2;
