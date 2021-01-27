import React from 'react';
import Button from '../Button/Button';
import Shelf from '../Shelf/Shelf';
import './Banner.scss';

import product01 from '../../images/product-01.png';
import product02 from '../../images/product-02.png';
import product03 from '../../images/product-03.png';

function Banner () {

	const images = [
		{
			'image': product01,
			'label': 'Comprar em 12x'
		},
		{
			'image': product02,
			'label': 'Mais Detalhes'
		},

		{
			'image': product03,
			'label': 'Adicionar à sacola'
		}
	]

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
								className="btn__cta"
								label="Veja nossas soluções"
							/>
						</div>
						<div className="banner__products grid__col-6">
							{
								images.map((value) => {
									return <>
										<Shelf
											type="banner"
											image={value.image}
										>
											<Button
												className="btn__shelfBanner"
												label={value.label}
											/>
										</Shelf>
									</>
								})
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Banner;
