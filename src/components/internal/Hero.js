import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<section id='hero' className='mb-3'>
			<div className='info white pd pdr-65p'>
				<h1 className='lemon-primary-lemon'>Little Lemon</h1>
				<h2>Chicago</h2>
				<div className='para'>
				<p>
					We are a family owned Mediterranean restaurant, focused on traditional
					recipes served with a modern twist.
				</p>
				<p>
					We are are accepting special reservation of table online. Click the link below to reserve a table for your guests.
				</p>

				</div>
				<Link className='txt-dec-none' to='reservation'>
					<button className='reserve-btn'>Reserve a Table</button>
				</Link>
			</div>
		</section>
	);
};

export default Hero;
