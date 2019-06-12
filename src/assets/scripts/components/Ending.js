import React from 'react';
import PropTypes from 'prop-types';
import sortRest from './sort-rest';

const Ending = (props) => {
	const { data, questions } = props;

	const user = questions.map(quest => quest.checked);

	const restaurantes = data.map(rest => (
		{
			name: rest.name,
			array: [rest.formality, rest.two, rest.group, rest.kids],
		}
	));

	const sorted = sortRest(user, restaurantes).slice(0, 5);

	return (
		<div className="final">
			<p>Baseado nas suas escolhas, você gostará desses lugares:</p>
			{sorted.map(each => (
				<div className="restaurant">
					{each.name}
				</div>
			))}
		</div>
	);
};

Ending.propTypes = {
	data: PropTypes.array.isRequired,
	questions: PropTypes.array.isRequired,
};

export default Ending;
