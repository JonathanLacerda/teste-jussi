import React from "react";

import './Contact.scss';

function Contact() {
	return <div className="contact">
		<div className="container">
			<h3 className="contact__title">
				Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.
			</h3>
			<p className="contact__subTitle">
				Entre em contato
			</p>
			<a className="contact__link" href="mailto:comercial@jussi.com.br">
				comercial@jussi.com.br
			</a>
		</div>
	</div>;
}

export default Contact;
