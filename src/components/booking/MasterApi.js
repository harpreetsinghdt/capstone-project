// Resource: https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js

import { useEffect } from "react";

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const MasterApi = function (date) {
	let result = [];
	let random = seededRandom(date.getDate());

	for (let i = 17; i <= 23; i++) {
		if (random() < 0.5) {
			result.push(i + ':00');
		}
		if (random() < 0.5) {
			result.push(i + ':30');
		}
	}

	// useEffect(() => {
	// 	result = fetchAPI(date);
	// }, []);
	return result;
};

// const submitAPI = function (formData) {
//   return true;
// };


export { MasterApi };
