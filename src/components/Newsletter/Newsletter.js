import React, { useState } from 'react';
import Button from '../Button/Button'

import './Newsletter.scss';

function Newsletter () {

	const [value, setValue] = useState('');
	const [success, setSuccess] = useState(false);

	function handleSubmit(event) {
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-next-line

		if(re.test(value)){
			setSuccess(true);
			setValue('');
		}

		event.preventDefault();
	}

	function handleFocus() {
		setSuccess(false);
	}

	return (
		<form
			className="newsletter"
			onSubmit={handleSubmit}>
			<input
				className="newsletter__input"
				type="email"
				value={value}
				onChange={e => setValue(e.target.value)}
				onFocus={handleFocus}
				placeholder="Digite seu e-mail"
			/>
			<Button
				className="btn__newsletter"
				label="CADASTRAR"
			/>
			<div className={success ? 'newsletter__success in' : 'newsletter__success'}>
				<b>Sucesso! </b> Você novidades no seu email a partir de hoje, fiquei ligado!
			</div>
		</form>
	);
}

export default Newsletter;
