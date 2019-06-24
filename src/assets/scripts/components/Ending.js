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
			<div className="name">
				{hasIt(item.link) ?
					<a
						href={item.link}
						target="_blank"
						rel="noopener noreferrer"
					>{item.name}
					</a>
					: item.name}
			</div>

			{hasIt(item.type) ?
				<p className="type">{item.type}</p>
				: ''}

			<div className="item-container">
				{hasIt(item.price) ?
					<p className="price">{'$'.repeat(item.price)}</p>
					: ''}

				{hasIt(item.stars) ?
					<p className="stars">{'\u2605'.repeat(item.stars)}</p>
					: ''}
			</div>

			<p className="compatibility"><span>{item.percent.toString().replace('.', ',')}%</span> de compatibilidade</p>

			{hasIt(item.photo) ?
				<figure className="photo">
					<img src={item.photo} alt={item.name} />
				</figure>
				: ''}

			{hasIt(item.desc) ?
				<p className="desc">{item.desc}</p>
				: ''}

			<div className="prize-container">
				{hasIt(item.prize) ?
					<p className="prize"><span>Prêmios do Júri:</span> {item.prize}</p>
					: ''}

				{hasIt(item.datafolha) ?
					<p className="datafolha"><span>Prêmios Datafolha:</span> {item.datafolha}</p>
					: ''}
			</div>

			<div className="quiz-container">
				{hasIt(item.array[0]) ?
					<p className="formality"><span>Relação de formalidade:</span> {'\u2606'.repeat(item.array[0])}</p>
					: ''}

				{hasIt(item.array[1]) ?
					<p className="two"><span>Para ir a dois:</span> {'\u2606'.repeat(item.array[1])}</p>
					: ''}

				{hasIt(item.array[2]) ?
					<p className="group"><span>Para ir em grupo (+ de 6 pessoas):</span> {'\u2606'.repeat(item.array[2])}</p>
					: ''}

				{hasIt(item.array[3]) ?
					<p className="kids"><span>Para ir com crianças:</span> {'\u2606'.repeat(item.array[3])}</p>
					: ''}
			</div>
		</div>
	);
};

const Ending = (props) => {
	const { data, questions } = props;

	const user = questions.map(quest => quest.checked);
	const type = user.shift();

	const restaurants = data
		.filter(rest => rest.quiz === 'SIM')
		.filter(rest => rest.type === type)
		.map((rest) => {
			const ret = rest;
			ret.array = [+rest.formality, +rest.two, +rest.group, +rest.kids];
			return ret;
		});

	const sorted = sortRest(user, restaurants).slice(0, 5);

	return (
		<div className="final">
			<p>Você escolheu:</p>
			<ul className="user-choices">
				<li>Relação de formalidade: <span className="star">{'\u2605'.repeat(user[0])}</span></li>
				<li>Para ir a dois: <span className="star">{'\u2605'.repeat(user[1])}</span></li>
				<li>Para ir em grupo (+ de 6 pessoas): <span className="star">{'\u2605'.repeat(user[2])}</span></li>
				<li>Para ir com crianças: <span className="star">{'\u2605'.repeat(user[3])}</span></li>
			</ul>
			<p>Baseado nas escolhas acima, você gostará desses lugares:</p>
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
