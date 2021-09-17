import React from 'react'
import '../../assets/css/input.scss'

const birthdateInput = (props) => {

	let inputElement = null;

		if(props.elementType === 'birthdateInput'){

			inputElement = <div>
				<h4>Koji je tvoj datum rođenja?*</h4>
				<input 
				className="InputElement" 
				value={props.value}
                onChange={props.changed}
				type="date"
				min="1960-01-01"
				max="2002-01-01"
                />
				<div className="cautionError" style={{display: (props.value === '') && (props.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>
			</div>

		}
	

	return(
		
	<div className="Input">
		{inputElement}
	</div>

	
	);
};

export default birthdateInput;