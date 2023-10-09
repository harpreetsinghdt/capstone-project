const testimonials = {
	testimonial1:
		"I can't get enough of My Little Lemon Restaurant! Every time I dine there, I'm greeted with a warm and inviting atmosphere that makes me feel.",
	testimonial2:
		"My Little Lemon Restaurant is a hidden gem! From the moment you step through the door, you're transported to a culinary paradise.",
	testimonial3:
		'My family and I have been regulars at My Little Lemon Restaurant for years, and it never disappoints. The food is consistently.',
	testimonial4:
		'My Little Lemon Restaurant is a true culinary treasure. As a food enthusiast, I am always on the lookout for new and exciting flavors.',
};

const TestimonialsCard = ({ key, data }) => {
	return (
		<div className='col-25 col-50 col light'>
			<div className='center mt-3'>
				<img className='test-img' src={data.picture.large} alt='' />
			</div>
			<h5 className='center my-2'>{data.name.first}</h5>
			<div className='star-rating'>
				<span class='fa fa-star checked'></span>
				<span class='fa fa-star checked'></span>
				<span class='fa fa-star checked'></span>
				<span class='fa fa-star checked'></span>
				<span class='fa fa-star'></span>
			</div>
			<p className='pd'>
				&quot;
				{testimonials['testimonial' + (Math.floor(Math.random() * 4) + 1)]}
				&quot;
			</p>
		</div>
	);
};

export default TestimonialsCard;
