import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Question from './components/Question';
import Ending from './components/Ending';

export default class App extends Component {
	constructor(props) {
		super(props);
		// this.state = preState(this.props.data.restaurants);
		this.state = {
			data: this.props.data.restaurants,
			questions: this.props.data.questions,
		};
		// engrenagens
		this.state.cogs = {
			current: 0,
			length: this.state.questions.length,
		};

		this.handleNextQuestion = this.handleNextQuestion.bind(this);
		this.handleCheckChange = this.handleCheckChange.bind(this);
	}

	handleNextQuestion() {
		const { state } = this;
		state.cogs.current += 1;
		this.setState(state);
	}

	handleCheckChange(index) {
		const { state } = this;
		const { current } = state.cogs;
		state.questions[current].checked = index;
		this.setState(state);
	}

	render() {
		const { questions, cogs, data } = this.state;
		const { current, length } = cogs;

		return (
			<div className="quiz">
				<div className="title">
					<h1>Me dá uma dica, melhor de sãopaulo?</h1>
					<div className="description">
						<p>Neste quiz, <b>O Melhor de sãopaulo Restaurantes, Bares e Guloseimas</b> ajuda a responder uma das dúvidas cruciais de quem gosta de gastronomia: aonde ir hoje.</p>
						<p>No resultado será uma seleção de indicações entre todos os vencedores do especial, que completa dez anos em 2019.</p>
					</div>
				</div>
				<div className="holder">
					{
						current < length
							? <Question
								currentQuestion={questions[current]}
								handleNextQuestion={this.handleNextQuestion}
								handleCheckChange={this.handleCheckChange}
							/>
							: <Ending
								data={data}
								questions={questions}
							/>
					}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	data:
		PropTypes
			.object
			.isRequired,
};
