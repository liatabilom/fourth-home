import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Card1.css';

class Card1 extends Component {
	render() {
		return (
			<div style={{ height: 480 }}>
				<div
					style={{
						height: '480px',
						position: 'relative',
						overflow: 'scroll',
						padding: '0',
						margin: '0',
					}}
				>
					<div style={{ height: '480px', padding: '0', margin: '0' }}>
						<Draggable
							bounds={(0, 10, 0, 10)}
							handle=".handle"
							grid={(25, 15)}
							allowAnyClick={true}
							disabled={true}
							dragHandlers={false}
							overflow="auto"
						>
							<img
								src="https://i.imgur.com/Kf1mT6O.jpg"
								alt="B&W Woman draggable"
								className="backgroundImg"
								style={{
									width: 600,
									height: 800,
								}}
							/>
						</Draggable>
					</div>
				</div>
			</div>
		);
	}
}

export default Card1;
