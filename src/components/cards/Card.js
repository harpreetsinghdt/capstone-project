const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';

const Card = ({ data }) => {
	return (
		<>
			<div className='card'>
				<div
					className='imgBx'
					style={{
						background: `url(${data.image}) no-repeat center / cover`,
					}}></div>
				<div className='content'>
					<div className='pd white'>
						<h5>
							{data.name}
							<span className='spe_price'>
								<span>{`${data.price}`}</span>
							</span>
						</h5>
						<p>{data.description ? data.description : lorem}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
