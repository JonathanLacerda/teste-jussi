import React from "react";
import { GrFacebookOption , GrInstagram, GrLinkedinOption } from 'react-icons/gr'
import Newsletter from '../Newsletter/Newsletter'

import './Footer.scss';

import wpp from '../../images/wppcompany.png';

function Footer() {
	return <footer className="footer">
		<div className="container">
			<div className="footer__newsletter">
				<div className="footer__title">
                    receba novidades da nossa área de produtos digitais.
				</div>
				<Newsletter />
			</div>
			<div className="footer__notes">
				<img className="footer__wpp" src={wpp} alt="WPP Company"/>
				<div className="footer__socials">
					<ul className="footer__socials-list">
						<li className="footer__socials-item">
							<a target="_blank" href="https://www.facebook.com/">
								<GrFacebookOption />
							</a>
						</li>
						<li className="footer__socials-item">
							<a target="_blank" href="https://www.facebook.com/">
								<GrInstagram />
							</a>
						</li>
						<li className="footer__socials-item">
							<a target="_blank" href="https://www.facebook.com/">
								<GrLinkedinOption />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
}

export default Footer;
