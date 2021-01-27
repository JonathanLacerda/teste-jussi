import React from 'react';
import './Button.scss';

function Button(props) {
	return(
		<>
			<button
				className={props.className}>
				{props.label}
			</button>
		</>
	)
}

export default Button;
