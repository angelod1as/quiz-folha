const preState = data => ({
	questions: [{
		id: 1,
		type: 'number-range',
		question: 'Pergunta 1',
		checked: 0,
		answers: [1, 2, 3, 4, 5],
	}, {
		id: 2,
		type: 'number-range',
		question: 'Pergunta 2',
		checked: 0,
		answers: [1, 2, 3, 4, 5],
	}, {
		id: 3,
		type: 'number-range',
		question: 'Pergunta 3',
		checked: 0,
		answers: [1, 2, 3, 4, 5],
	}, {
		id: 4,
		type: 'number-range',
		question: 'Pergunta 4',
		checked: 0,
		answers: [1, 2, 3, 4, 5],
	}],
	data,
}); export default preState;
