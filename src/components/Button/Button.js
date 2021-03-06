import React from 'react';
import './Button.scss';

function Button(props) {
	return(
		<>
			<button
				className={props.className}>
				{props.label}
				{props.children}
			</button>
		</>
	)
}

export default Button;
