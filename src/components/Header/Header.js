import React from "react";
import logo from '../../images/logoJussiVectorGreen.svg';
import './Header.scss';
import { RiSearchLine } from 'react-icons/ri';
import { FiShoppingCart } from 'react-icons/fi';

function Header () {
	return(
		<div className="header">
			<div className="header__content">
				<div className="header__logo">
					<img src={logo} alt=""/>
				</div>
				<div className="header__nav">
					<ul className="header__list">
						<li className="header__list-item">
							<a className="header__list-link">
								Nossas soluções
							</a>
						</li>
						<li className="header__list-item">
							<a className="header__list-link">
								Conheça a Jüssi
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="header__content">
				<div className="header__search">
					<input className="header__search-input" placeholder="Buscar" type="text"/>
					<RiSearchLine className="header__search-ico"/>
				</div>
				<div className="header__login">
					<a className="header__login-link" href="#">
						Login
					</a>
				</div>
				<div className="header__cart">
					<FiShoppingCart className="header__cart-ico"/>
				</div>
			</div>
		</div>
	)
}
export default Header;
