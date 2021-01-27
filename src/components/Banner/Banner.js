import React, { Component } from 'react';
import Button from '../Button/Button';
import './Banner.scss';

import product01 from '../../images/product-01.png';
import product02 from '../../images/product-02.png';
import product03 from '../../images/product-03.png';

function Banner () {
	return (
		<>
			<div className="banner">
				<div className="container">
					<div className="grid">
						<div className="banner__cta grid__col-6">
							<h2 className="banner__title">
								Criamos lojas que vendem mais.
							</h2>
							<h3 className="banner__subTitle">
								A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?
							</h3>
							<Button
								className="teste"
								label="teste02"
							/>
						</div>
						<div className="banner__products grid__col-6">
							<div className="banner__product">
								<img src={product01} alt=""/>
								<Button
									className="teste"
									label="Comprar em 12x"
								/>
							</div>
							<div className="banner__product">
								<img src={product02} alt=""/>
								<Button
									className="teste"
									label="Mais Detalhes"
								/>
							</div>
							<div className="banner__product">
								<img src={product03} alt=""/>
								<Button
									className="teste"
									label="Adicionar à sacola"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Banner;
