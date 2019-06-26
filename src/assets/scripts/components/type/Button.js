import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	const { buttons, checked, handleCheckChange } = props;

	return (
		<form className="buttons">
			<div className="button-inside">
				{buttons.map(btn => (
					<label
						key={btn}
						htmlFor={btn}
						className={btn === checked ? 'checked' : 'not-checked'}
					>{btn}
						<input
							type="radio"
							id={btn}
							name="range"
							value={btn}
							defaultChecked={btn === checked}
							onClick={() => handleCheckChange(btn)}
						/>
					</label >
				))}
			</div>
		</form>
	);
};

Button.propTypes = {
	buttons: PropTypes.array.isRequired,
	checked: PropTypes.string.isRequired,
	handleCheckChange: PropTypes.func.isRequired,
};

export default Button;
