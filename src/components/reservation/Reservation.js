import { useState, useEffect } from 'react';
import ReservationForm from './ReservationForm';
import ReservationConfirm from './ReservationConfirm';
import AppContext from './AppContext';
import { fetchAPI } from './MasterApi';

const Reserve = () => {
	const [confirm, setConfirm] = useState(false);
	const [msg, setMsg] = useState({
		line1: '',
		line2: '',
		line3: '',
	});

	const [availableTimes, setAvailableTimes] = useState([]);

	useEffect(() => {
		const date = new Date();
		const times = fetchAPI(date);
		setAvailableTimes(times);
	}, []);

	const contextValut = { setConfirm, msg, setMsg, availableTimes };
	return (
		<>
			<AppContext.Provider value={contextValut}>
				{!confirm ? <ReservationForm /> : <ReservationConfirm conf={msg} />}
			</AppContext.Provider>
		</>
	);
};

export default Reserve;
