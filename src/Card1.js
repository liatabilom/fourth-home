import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Card1.css';

class Card1 extends Component {
	render() {
		return (
			<div style={{ height: 480 }}>
				<div
					className="backgroundChinese"
					style={{
						height: '480px',
						width: '378px',
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					<div>
						<Draggable onStart={() => false}>
							<div>
								<img
									src="https://i.imgur.com/Kf1mT6O.jpg"
									alt="B&W Flower"
									id="card1"
									overflow="hidden"
									style={{ height: 780, width: 495 }}
								/>
							</div>
						</Draggable>
					</div>
				</div>
			</div>
		);
	}
}

export default Card1;
