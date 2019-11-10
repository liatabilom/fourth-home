import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Card3.css';

class Card3 extends Component {
	render() {
		return (
			<div style={{ height: 480 }}>
				<div
					className="backgroundChinese"
					style={{
						height: '480px',
						width: '378px',
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
								src="https://i.imgur.com/8L40sbY.jpg"
								alt="Japanese Background"
								className="backgroundImg"
								style={{
									width: 800,
									height: 605,
								}}
							/>
						</Draggable>
					</div>
				</div>
			</div>
		);
	}
}

export default Card3;
