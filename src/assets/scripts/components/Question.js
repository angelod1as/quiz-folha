import React from 'react';
import PropTypes from 'prop-types';

import Range from './type/Range';
import Button from './type/Button';

const Question = (props) => {
	const {
		handleNextQuestion, currentQuestion, handleCheckChange, counter,
	} = props;

	let quiz = '';

	switch (currentQuestion.type) {
	case 'number-range':
		quiz = (
			<Range
				from={currentQuestion.range[0]}
				to={currentQuestion.range[1]}
				tip={currentQuestion.tip}
				diff={currentQuestion.diff}
				key={currentQuestion.id}
				checked={currentQuestion.checked}
				handleCheckChange={handleCheckChange}
			/>
		);
		break;
	case 'button':
		quiz = (
			<Button
				buttons={currentQuestion.buttons}
				key={currentQuestion.id}
				checked={currentQuestion.checked}
				handleCheckChange={handleCheckChange}
			/>
		);
		break;
	default:
		quiz = '';
		break;
	}
	return (
		<div className="question">
			<h2>
				<span className="q-counter">
					<span>
						{counter[0] + 1}
					</span>
					/
					<span>
						{counter[1]}
					</span>
				</span>
				<span className="q-title">
					{currentQuestion.question}
				</span>
			</h2>
			{quiz}
			{currentQuestion.checked ?
				<button
					className="button"
					onClick={() => handleNextQuestion()}
				>Próxima!
				</button>
				: ''}
		</div>
	);
};

Question.propTypes = {
	handleNextQuestion: PropTypes.func.isRequired,
	currentQuestion: PropTypes.object.isRequired,
	handleCheckChange: PropTypes.func.isRequired,
	counter: PropTypes.array.isRequired,
};

export default Question;
