import React from 'react';
import Shelf from '../Shelf/Shelf';
import Button from '../Button/Button'

import './Solutions.scss';

import products from '../../services/mockup/products.json'

function Solutions()	{

	return <>
		<div className="solutions">
			<div className="container">
				<h3 className="solutions__title">
					Nossas soluções
				</h3>
				<div className="grid">
					{
						products.map((value) => {
							return <>
								<Shelf
									type="solutions grid__col-3"
									image={value.image}
									name={value.name}
									description={value.description}
									features={value.features}
								>
									<Button
										className="btn__shelfSoluction"
										label="Ver solução"
									/>
								</Shelf>
							</>
						})
					}
				</div>
			</div>
		</div>
	</>;
}

export default Solutions;
