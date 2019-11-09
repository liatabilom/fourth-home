import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Card1.css';

class Card1 extends Component {
	render() {
		return (
			<div
				style={{
					height: '500px',
					width: '510px',
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				<Draggable onStart={() => false}>
					<div>
						<img src="https://i.imgur.com/Kf1mT6O.jpg" alt="B&W Flower" id="card1" />
					</div>
				</Draggable>
			</div>
		);
	}
}

export default Card1;
