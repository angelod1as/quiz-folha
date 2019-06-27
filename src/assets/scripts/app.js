import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Question from './components/Question';
import Ending from './components/Ending';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.initialState = {
			data: this.props.data.restaurants,
			questions: this.props.data.questions,
		};
		// engrenagens
		this.initialState.cogs = {
			current: 0,
			length: this.initialState.questions.length,
		};

		this.state = _.cloneDeep(this.initialState);

		this.handleNextQuestion = this.handleNextQuestion.bind(this);
		this.handleCheckChange = this.handleCheckChange.bind(this);
		this.resetState = this.resetState.bind(this);
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

	resetState() {
		const { initialState } = this;
		this.setState(initialState);
	}

	render() {
		const { state } = this;
		const { questions, cogs, data } = state;
		const { current, length } = cogs;

		return (
			<div className="quiz">
				<div className="title">
					<h1 className="hidden">Aonde ir hoje?</h1>
					<figure className="title-svg">
						<img src="../images/title.svg" alt="" />
						<div className="line" />
					</figure>
					<div className="description">
						<p><b>O Melhor de sãopaulo Restaurantes, Bares e Guloseimas</b> ajuda a responder uma das dúvidas cruciais de quem gosta de gastronomia.</p>
						<p>No resultado será exibida uma seleção de indicações entre todos os vencedores do especial, que completa dez anos em 2019.</p>
					</div>
				</div>
				<div className="holder">
					{
						current < length
							? <Question
								currentQuestion={questions[current]}
								handleNextQuestion={this.handleNextQuestion}
								handleCheckChange={this.handleCheckChange}
								counter={[current, length]}
							/>
							: <Ending
								data={data}
								questions={questions}
								state={state}
								resetState={this.resetState}
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
