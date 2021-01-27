import React, { Component } from 'react';
import Button from '../Button/Button'

import './Newsletter.scss';
class Newsletter extends Component {

	constructor(props) {
		super(props);
		this.state = {
            value: '',
            validEmail: false,
            success: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});

		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(re.test(this.state.value)){
			this.setState({validEmail: true});
        }

        if(this.state.value.length < 1){
            this.setState({success: false});
        }
	}

	handleSubmit(event) {
        this.setState({success: this.state.validEmail})
		event.preventDefault();
    }

	render() {
		return (
			<form
                className="newsletter"
                onSubmit={this.handleSubmit}>
				<input
                    className="newsletter__input"
					type="email"
					value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Digite seu e-mail"
                    onFocus={this.handleFocus}
				/>
                <Button
                    className="btn__newsletter"
                    label="CADASTRAR"
                />
				<div className={this.state.success ? 'newsletter__success in' : 'newsletter__success'}>
					<b>Sucesso!</b> Você novidades no seu email a partir de hoje, fiquei ligado!
				</div>
			</form>
		);
	}
}

export default Newsletter;
