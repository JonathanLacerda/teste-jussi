import React from 'react';
import './Highlights.scss';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import brand01 from '../../images/logo-brastemp.png';
import brand02 from '../../images/logo-compra-certa.png';
import brand03 from '../../images/logo-consul.png';
import brand04 from '../../images/logo-thebar.png';

function Highlights() {

	const brands = [
		{
			'image': brand01,
			'alt': 'Brastemp'
		},
		{
			'image': brand02,
			'alt': 'Compra Certa'
		},
		{
			'image': brand03,
			'alt': 'Consul'
		},
		{
			'image': brand04,
			'alt': 'The Bar'
		}
	];

	return(
		<>
			<div className="heighlights">
				<div className="container">
					<div className="grid">
						<div className="grid__col-4">
							<p className="heighlights__title">
								Nossas principais lojas VTEX
							</p>
							<HiOutlineArrowNarrowRight class="heighlights__ico"/>
						</div>
						<div className="grid__col-8">
							<ul class="heighlights__list">
								{
									brands.map((value) => {
										return <>
											<li className="heighlights__list-item">
												<img src={value.image} alt={value.alt}/>
											</li>
										</>
									})
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Highlights;
