import React, { Component } from "react";
import './Shelf.scss';

class Shelf extends Component {

	render() {
		return <>
			<div className={"shelf__" + this.props.type}>
				<img
					src={this.props.image}
					className="shelf__image"
					alt=""
				/>
				{this.props.children}
			</div>
		</>;
	}
}

export default Shelf;
