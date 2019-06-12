const sortRest = (user, restaurantes) => {
	const percentMax = 100 / user.length;

	const newRest = restaurantes.map((rest) => {
		const comparison = rest.array.map((restArr, i) => {
			const diff = 1 + (Math.abs(restArr - user[i]));
			return +parseFloat(percentMax / diff).toFixed(2);
		});
		const final = {
			name: rest.name,
			percent: comparison.reduce((a, b) => a + b),
		};
		return final;
	});

	const compareValues = (key, order = 'asc') => (a, b) => {
		if (
			!Object.prototype.hasOwnProperty.call(a, key) || !Object.prototype.hasOwnProperty.call(b, key)
		) {
			// property doesn't exist on either object
			return 0;
		}

		const varA = (typeof a[key] === 'string') ?
			a[key].toUpperCase() : a[key];
		const varB = (typeof b[key] === 'string') ?
			b[key].toUpperCase() : b[key];

		let comparison = 0;
		if (varA > varB) {
			comparison = 1;
		} else if (varA < varB) {
			comparison = -1;
		}
		return (
			(order === 'desc') ? (comparison * -1) : comparison
		);
	};

	const sorted = [...newRest].sort(compareValues('percent', 'desc'));

	return sorted;
};

export default sortRest;
