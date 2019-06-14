import React from 'react';
import PropTypes from 'prop-types';

import Range from './type/Range';

const Question = (props) => {
	const { handleNextQuestion, currentQuestion, handleCheckChange } = props;
	return (
		<div>
			<h2>{currentQuestion.question}</h2>
			<Range
				from={1}
				to={5}
				key={currentQuestion.id}
				checked={currentQuestion.checked}
				handleCheckChange={handleCheckChange}
			/>
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
