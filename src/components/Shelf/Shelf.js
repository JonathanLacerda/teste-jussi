import React from 'react';
import './Shelf.scss';

function Shelf(props) {

	return (
		<div className={"shelf__" + props.type}>
			{props.type === 'banner' ? (
				<img
				src={props.image}
				className="shelf__image"
				alt=""
			/>
			) : (
				<>
					<div className="shelf__image-container">
						<img
							src={props.image}
							alt={props.name}
							className="shelf__image"
						/>
					</div>
					<h4 className="shelf__title">
						{props.name}
					</h4>
					<p className="shelf__description">
						{props.description}
					</p>
					<ul className="shelf__list">
						{
							props.features.map((feature) =>{
								return <li className="shelf__list-item">{feature}</li>
							})
						}
					</ul>
				</>
			)}
			{props.children}
		</div>
	)
}

export default Shelf;