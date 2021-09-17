import React from 'react'
import '../../assets/css/input.scss'

const emailInput = (props) => {

	let inputElement = null;

		if(props.elementType === 'emailInput'){

			inputElement = <div>
				<h4>Najbolji email putem kojeg te možemo kontaktirati?*</h4>
				<input 
				className="InputElement" 
				value={props.value}
                onChange={props.changed}
                type="email"
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

export default emailInput;