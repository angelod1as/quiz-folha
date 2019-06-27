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
					<p className="stars">
						{'\u2605'.repeat(item.stars)}
						{'\u2606'.repeat(5 - item.stars)}
					</p>
					: ''}
			</div>

			<p className="compatibility">
				<span>{item.percent.toString().replace('.', ',')}%</span>
				de compatibilidade
			</p>

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
					<p className="prize">
						<span>Prêmio(s) do Júri</span>
						{item.prize}
					</p>
					: ''}

				{hasIt(item.datafolha) ?
					<p className="datafolha">
						<span>Prêmio(s) Datafolha</span>
						{item.datafolha}
					</p>
					: ''}
			</div>

			<div className="quiz-container">
				{hasIt(item.array[0]) ?
					<div className="points">
						<p>Relação de formalidade</p>
						<span className="circle">
							{'\u25CF'.repeat(item.array[0])}
							{'\u25CB'.repeat(5 - item.array[0])}
						</span>
					</div>
					: ''}

				{hasIt(item.array[1]) ?
					<div className="points">
						<p>Para ir em grupo <span>(+ de 6 pessoas)</span></p>
						<span className="circle">
							{'\u25CF'.repeat(item.array[1])}
							{'\u25CB'.repeat(5 - item.array[1])}
						</span>
					</div>
					: ''}

				{hasIt(item.array[2]) ?
					<div className="points">
						<p>Para ir com crianças</p>
						<span className="circle">
							{'\u25CF'.repeat(item.array[2])}
							{'\u25CB'.repeat(5 - item.array[2])}
						</span>
					</div>
					: ''}

				{hasIt(item.array[3]) ?
					<div className="points">
						<p>Para ir a dois</p>
						<span className="circle">
							{'\u25CF'.repeat(item.array[3])}
							{'\u25CB'.repeat(5 - item.array[3])}
						</span>
					</div>
					: ''}
			</div>
		</div>
	);
};

const Ending = (props) => {
	const { data, questions, resetState } = props;

	const user = questions.map(quest => quest.checked);
	const type = user.shift();

	const restaurants = data
		.filter(rest => rest.quiz === 'SIM')
		.filter(rest => rest.type === type)
		.map((rest) => {
			const ret = rest;
			ret.array = [+rest.formality, +rest.group, +rest.kids, +rest.two];
			return ret;
		});

	const sorted = sortRest(user, restaurants).slice(0, 5);

	console.log(user);
	console.log(sorted);

	return (
		<div className="final">
			<p>Você escolheu:</p>
			<div className="user-choices">
				<div className="points">
					<p>Relação de formalidade</p>
					<span className="circle">
						{'\u25CF'.repeat(user[0])}
						{'\u25CB'.repeat(5 - user[0])}
					</span>
				</div>
				<div className="points">
					<p>Para ir em grupo <span>(+ de 6 pessoas)</span></p>
					<span className="circle">
						{'\u25CF'.repeat(user[1])}
						{'\u25CB'.repeat(5 - user[1])}
					</span>
				</div>
				<div className="points">
					<p>Para ir com crianças</p>
					<span className="circle">
						{'\u25CF'.repeat(user[2])}
						{'\u25CB'.repeat(5 - user[2])}
					</span>
				</div>
				<div className="points">
					<p>Para ir a dois</p>
					<span className="circle">
						{'\u25CF'.repeat(user[3])}
						{'\u25CB'.repeat(5 - user[3])}
					</span>
				</div>
			</div>

			<p>Baseado nas escolhas acima, você gostará desses lugares:</p>
			<div className="each">
				{sorted.map(each => (
					<ListItem item={each} key={each.name} />
				))}
			</div>
			<button
				className="reset"
				onClick={() => resetState()}
			>Reiniciar
			</button>
		</div>
	);
};

Ending.propTypes = {
	data: PropTypes.array.isRequired,
	questions: PropTypes.array.isRequired,
	resetState: PropTypes.func.isRequired,
};

ListItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default Ending;
