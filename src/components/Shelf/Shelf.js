import React, { Component } from "react";

class Shelf extends Component {
	render() {
		return <>
			<div className={!this.props.type? "banner__product" : "banner__shelf"}>
				<img src={this.props.image} alt=""/>
				{this.props.children}
			</div>
		</>;
	}
}

export default Shelf;
