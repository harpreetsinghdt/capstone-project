import brus from '../assets/images/specials/bruschetta.jpg';
import greek from '../assets/images/specials/greekSalad.jpg';
import dessert from '../assets/images/specials/dessert.jpg';
import Hero from '../components/internal/Hero';
import Special from '../components/internal/Special';
import Testimonials from '../components/testimonials/Testimonials';
import '../assets/styles.css';
const data = [
	{
		name: 'Greek Salad',
		price: '$8.99',
		image: greek,
		description:
			'Lettuce, peppers, olives and feta cheese, garnished with garlic and croutons.',
	},
	{
		name: 'Bruschetta',
		price: '$6.99',
		image: brus,
		description:
			'Grilled bread smeared with garlic and seasoned with salt and olive oil.',
	},
	{
		name: 'Lemon Special',
		price: '$4.99',
		image: dessert,
		description: "This comes straight from grandma's recipe book.",
	},
];

const Home = () => {
	return (
		<>
			<Hero />
			<Special data={data} />
			<Testimonials />
		</>
	);
};

export default Home;
