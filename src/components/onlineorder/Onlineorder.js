import AboutPic1 from '../../assets/images/about/aboutus1.jpg';
import AboutPic2 from '../../assets/images/about/aboutus2.jpg';

const Onlineorder = () => {
	return (
		<>
			<section className='container my-3'>
				<div className='row justify-center'>
					<div className='col-md-6 col-sm-12 align-self-start pd'>
						<h2 className='lemon-primary-lemon'>Little Lemon</h2>
						<h3 className='lemon-primary-dark'>Chicago</h3>

						<h5>
							We are working on this facility. It will be available soon.
						</h5>
					</div>
					<div className='col-md-6 col-sm-12 text-center align-self-center'>
						
						<div>
							<img
								className='about-pic img-fluid'
								src={AboutPic2}
								alt='About us 2'
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Onlineorder;
