import React from 'react';
import PropTypes from 'prop-types';

const Range = (props) => {
	const {
		from, to, checked, handleCheckChange,
	} = props;
	if (from > to) {
		throw console.error('FROM bigger than TO'); // eslint-disable-line
	}
	const range = [];
	for (let i = from; i <= to; i += 1) {
		range.push((
			<label
				key={i}
				htmlFor={i}
				className={i === checked ? 'checked' : 'not-checked'}
			>{i}
				<input
					type="radio"
					id={i}
					name="range"
					value={i}
					defaultChecked={i === checked}
					onClick={() => handleCheckChange(i)}
				/>
			</label >
		));
	}

	const style = {
		width: `${(100 / range.length) * (range.length - 1)}%`,
		left: `${(100 / range.length) / 2}%`,
	};

	return (
		<form className="range">
			<div className="range-inside">
				{range}
			</div>
			<div
				className="bgline"
				style={style}
			/>
		</form>
	);
};

Range.propTypes = {
	from: PropTypes.number.isRequired,
	to: PropTypes.number.isRequired,
	checked: PropTypes.number.isRequired,
	handleCheckChange: PropTypes.func.isRequired,
};

export default Range;
