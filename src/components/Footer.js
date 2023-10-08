import { Link } from 'react-router-dom';
import Logo from './../assets/footer-logo.png';
import { SocialIcon } from 'react-social-icons';
function Footer() {
	return (
		<footer className='footer'>
			<div>
				<Link to='/'>
					<img src={Logo} alt='Logo' />
				</Link>
			</div>
			<div className='sitemap'>
				<h3>Sitemap</h3>
				<div className='footer-nav'>
					<ul>
						<li>
							<Link to='/'>Home</Link>
							<Link to='/about'>About</Link>
							<Link to='/menu'>Menu</Link>
							<Link to='/reservation'>Reservation</Link>
							<Link to='/online-order'>Online Order</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='contact-info'>
				<h3>Contact Info</h3>
				<p>500 Queen St W,</p>
				<p>Toronto, ON M5V 2B6</p>
				<p>+1 584763255</p>
				<p>info@littlelemon.com</p>
			</div>
			<div className='social-link'>
				<h3>Social Medial Links</h3>
				<SocialIcon
					className='colorscheme'
					url='https://instagram.com/littlelemon'
				/>
				<SocialIcon
					className='colorscheme'
					url='https://facebook.com/littlelemon'
				/>
				<SocialIcon
					className='colorscheme'
					url='https://twitter.com/littlelemon'
				/>
			</div>
		</footer>
	);
}

export default Footer;
