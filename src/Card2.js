import React, { Component } from 'react';
import Draggable from 'react-draggable';

import './Card2.css';

class Card2 extends Component {
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
						padding: '0',
						margin: '0',
					}}
				>
					<div>
						<Draggable onStart={() => false}>
							<div>
								<img
									src="https://i.imgur.com/KsoUmnQ.jpg"
									alt="B&W Flower"
									id="card2"
									style={{ height: 680, width: 500 }}
								/>
							</div>
						</Draggable>
					</div>
				</div>
			</div>
		);
	}
}

export default Card2;
