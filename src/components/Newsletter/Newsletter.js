import React, { Component } from "react";
import './Newsletter.scss';
class Newsletter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: '',
			validEmail: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});

		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(re.test(this.state.value)){
			console.log('email válido');
		}
		else{
			console.log('email inválido');
		}
	}

	handleSubmit(event) {
		alert('Um nome foi enviado: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form
				className="newsletter"
				onSubmit={this.handleSubmit}>
				<input
					type="email"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<input type="submit" value="CADASTRAR" />
				<div className="newsletter__success">
					{this.state.value}
				</div>
			</form>
		);
	}
}

export default Newsletter;
