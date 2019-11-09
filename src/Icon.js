import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

class Icon extends Component {
	state = '';
	showTitle = () => {
		this.setState({
			subTitle: this.props.title,
		});
	};

	removeTitle = () => {
		this.setState({
			subTitle: '',
		});
	};

	render() {
		return (
			<div>
				<span>
					<a href="">
						<FontAwesomeIcon
							icon={faPlusCircle}
							size="1x"
							className="plusIcon2"
							onMouseOver={this.showTitle}
							onMouseEnter={this.showTitle}
							onMouseLeave={this.removeTitle}
						/>
					</a>
				</span>
			</div>
		);
	}
}

export default Icon;
