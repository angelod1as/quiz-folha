import React from 'react';
import PropTypes from 'prop-types';

const Range = (props) => {
	const {
		from, to, checked, handleCheckChange, tip, diff,
	} = props;
	if (from > to) {
		throw console.error('FROM bigger than TO'); // eslint-disable-line
	}
	const hasDiff = diff.length > 0;
	const hasTip = tip.length > 0;
	const range = [];
	const rangeTip = [];
	for (let i = from; i <= to; i += 1) {
		if (hasTip) {
			if (i === from) {
				rangeTip.push(<p>{tip[0]}</p>);
			} else if (i === to) {
				rangeTip.push(<p>{tip[1]}</p>);
			} else {
				rangeTip.push(<p>&nbsp;</p>);
			}
		}

		range.push((
			<div className="range-flex" key={i}>
				<label
					htmlFor={i}
					className={`${i === checked ? 'checked' : 'not-checked'} ${hasDiff ? 'diff' : ''}`}
				>{hasDiff ? diff[0].repeat(i + 1) : i}
					<input
						type="radio"
						id={i}
						name="range"
						value={i}
						defaultChecked={i === checked}
						onClick={() => handleCheckChange(i)}
					/>
				</label >
			</div>
		));
	}

	const style = {
		width: `${(100 / range.length) * (range.length - 1)}%`,
		left: `${(100 / range.length) / 2}%`,
	};

	return (
		<div className="range-container">
			<form className="range">
				<div className="range-inside">
					{range}
				</div>
				<div
					className="bgline"
					style={style}
				/>
			</form>
			<div className="tip">
				{rangeTip}
			</div>
		</div>
	);
};

Range.propTypes = {
	from: PropTypes.number.isRequired,
	to: PropTypes.number.isRequired,
	checked: PropTypes.number.isRequired,
	handleCheckChange: PropTypes.func.isRequired,
	tip: PropTypes.array.isRequired,
	diff: PropTypes.array.isRequired,
};

export default Range;
