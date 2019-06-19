import React from 'react';
import PropTypes from 'prop-types';

import Range from './type/Range';
import Button from './type/Button';

const Question = (props) => {
	const { handleNextQuestion, currentQuestion, handleCheckChange } = props;

	let quiz = '';

	switch (currentQuestion.type) {
	case 'number-range':
		quiz = (
			<Range
				from={currentQuestion.range[0]}
				to={currentQuestion.range[1]}
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
			<h2>{currentQuestion.question}</h2>
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
};

export default Question;
