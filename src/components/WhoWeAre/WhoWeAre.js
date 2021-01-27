import React from 'react';
import Button from '../Button/Button'

import './WhoWeAre.scss';

import jussi from '../../images/image-jussi.png';

function WhoWeAre() {
	return <div className="whoweare">
		<div className="container">
			<div className="grid">
				<div className="grid__col-3">
					<h2 className="whoweare__title">
						Olá, somos <br />	a Jüssi
					</h2>
					<p className="whoweare__subTitle">
						A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
					</p>
					<Button
						className="btn__cta"
						label="Conheça a Jüssi"
					/>
				</div>
				<div className="whoweare__image grid__col-9">
					<img src={jussi} alt="Olá, somosa Jüssi"/>
				</div>
			</div>
		</div>
	</div>
}

export default WhoWeAre;
