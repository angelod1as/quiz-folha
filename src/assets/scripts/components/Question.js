import React from 'react';
import PropTypes from 'prop-types';

import Range from './type/Range';

const Question = (props) => {
	const { handleNextQuestion, currentQuestion, handleCheckChange } = props;
	return (
		<div>
			<h1>{currentQuestion.question}</h1>
			{/*
				If there were other tipes of quiz
				this "if" would go here
			*/}
			<Range
				from={1}
				to={5}
				key={currentQuestion.id}
				checked={currentQuestion.checked}
				handleCheckChange={handleCheckChange}
			/>
			<button onClick={() => handleNextQuestion()}>Próxima!</button>
		</div>
	);
};

Question.propTypes = {
	handleNextQuestion: PropTypes.func.isRequired,
	currentQuestion: PropTypes.object.isRequired,
	handleCheckChange: PropTypes.func.isRequired,
};

export default Question;
