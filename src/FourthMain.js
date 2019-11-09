import React, { Component } from 'react';
import Search from './Search';
import AllCards from './AllCards';
import Pages from './Pages';
import './FourthMain.css';

class ThirdMain extends Component {
	render() {
		return (
			<div>
				<div className="header">
					<header>
						Na'dia
						<br />
						Correia Gonc,alves
					</header>
				</div>
				<Search />
				<div className="row">
					<div className="side">
						<h2>
							<AllCards />
						</h2>
					</div>
				</div>
				<div className="footer">
					<Pages />
				</div>
			</div>
		);
	}
}

export default ThirdMain;
