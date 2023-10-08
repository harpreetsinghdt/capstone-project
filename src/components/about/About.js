import './About.css';
import AboutPic1 from '../../assets/images/about/aboutus1.jpg';
import AboutPic2 from '../../assets/images/about/aboutus2.jpg';

const About = () => {
	return (
		<>
			<section className='container my-3'>
				<div className='row justify-center'>
					<div className='col-md-6 col-sm-12 align-self-start pd'>
						<h2 className='lemon-primary-lemon'>Little Lemon</h2>
						<h3 className='lemon-primary-dark'>Chicago</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
						<p>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don't look even
							slightly believable. If you are going to use a passage of Lorem
							Ipsum, you need to be sure there isn't anything embarrassing
							hidden in the middle of text. All the Lorem Ipsum generators on
							the Internet tend to repeat predefined chunks as necessary, making
							this the first true generator on the Internet. It uses a
							dictionary of over 200 Latin words, combined with a handful of
							model sentence structures, to generate Lorem Ipsum which looks
							reasonable. The generated Lorem Ipsum is therefore always free
							from repetition, injected humour, or non-characteristic words etc.
						</p>
						<p>
							The standard chunk of Lorem Ipsum used since the 1500s is
							reproduced below for those interested. Sections 1.10.32 and
							1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
							reproduced in their exact original form, accompanied by English
							versions from the 1914 translation by H. Rackham.
						</p>
					</div>
					<div className='col-md-6 col-sm-12 text-center align-self-center'>
						<div className='my-3'>
							<img
								className='about-pic img-fluid'
								src={AboutPic1}
								alt='About us 1'
							/>
						</div>
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

export default About;
