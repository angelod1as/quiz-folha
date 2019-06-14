import React from 'react';
import PropTypes from 'prop-types';
import sortRest from './sort-rest';

const ListItem = ({ item }) => {
	const hasIt = (it) => {
		if (it && it !== null && it !== undefined) {
			return true;
		} return false;
	};

	return (
		<div className="restaurant">
			<div className="name">{item.name}</div>

			{hasIt(item.type) ?
				<p className="type">{item.type}</p>
				: ''}

			{hasIt(item.price) ?
				<p className="price">{'$'.repeat(item.price)}</p>
				: ''}

			{hasIt(item.stars) ?
				<p className="stars">{'\u2605'.repeat(item.stars)}</p>
				: ''}

			{hasIt(item.prize) ?
				<p className="prize">Prêmios: {item.prize}</p>
				: ''}

			{hasIt(item.datafolha) ?
				<p className="datafolha">Prêmios Datafolha: {item.datafolha}</p>
				: ''}

			{hasIt(item.array[0]) ?
				<p className="formality">Relação de formalidade: {item.array[0]}</p>
				: ''}

			{hasIt(item.array[1]) ?
				<p className="two">Para ir a dois: {item.array[1]}</p>
				: ''}

			{hasIt(item.array[2]) ?
				<p className="group">Para ir em grupo (+ de 6 pessoas): {item.array[2]}</p>
				: ''}

			{hasIt(item.array[3]) ?
				<p className="kids">Para ir com criança: {item.array[3]}</p>
				: ''}
		</div>
	);
};

const Ending = (props) => {
	const { data, questions } = props;

	const user = questions.map(quest => quest.checked);

	const restaurants = data
		.filter(rest => rest.quiz === 'SIM')
		.map(rest => (
			{
				name: rest.name,
				type: rest.type,
				prize: rest.prize,
				datafolha: rest.datafolha,
				price: +rest.price,
				stars: +rest.stars,
				array: [+rest.formality, +rest.two, +rest.group, +rest.kids],
			}
		));

	const sorted = sortRest(user, restaurants).slice(0, 5);

	return (
		<div className="final">
			<p>Baseado nas suas escolhas, você gostará desses lugares:</p>
			<div className="each">
				{sorted.map(each => (
					<ListItem item={each} key={each.name} />
				))}
			</div>
			<button
				className="reset"
				onClick={() => window.location.reload()}
			>Reiniciar
			</button>
		</div>
	);
};

Ending.propTypes = {
	data: PropTypes.array.isRequired,
	questions: PropTypes.array.isRequired,
};

ListItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default Ending;
