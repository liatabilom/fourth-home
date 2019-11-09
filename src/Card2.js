import React, { Component } from 'react';
import Draggable from 'react-draggable';

import './Card2.css';

class Card2 extends Component {
	render() {
		return (
			<div
				style={{
					height: '500px',
					width: '480px',
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				<Draggable onStart={() => false}>
					<div>
						<img src="https://i.imgur.com/KsoUmnQ.jpg" alt="B&W Flower" id="card2" />
					</div>
				</Draggable>
			</div>
		);
	}
}

export default Card2;
