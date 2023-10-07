import Logo from './../assets/logo.png';

function Footer() {
	return (
		<footer>
			<section>
				<img src={Logo} />
			</section>
			<section>Doormat Navigation</section>
			<section>Contact Info</section>
			<section>Social Medial Links</section>
		</footer>
	);
}

export default Footer;
