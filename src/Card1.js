import React, { Component } from 'react';
import './Card1.css';

class Card1 extends Component {
	state = {
		loaded: true,
	};

	showTitle = () => {
		this.setState({
			subTitle: 'Din Tai Fung',
		});
	};

	removeTitle = () => {
		this.setState({
			subTitle: '',
		});
	};

	render() {
		return (
			<div
				style={{ height: 480 }}
				onMouseOver={this.showTitle}
				onMouseEnter={this.showTitle}
				onMouseLeave={this.removeTitle}
			>
				<h3 className="restaurantTitle">{this.state.subTitle}</h3>
			</div>
		);
	}
}

export default Card1;
