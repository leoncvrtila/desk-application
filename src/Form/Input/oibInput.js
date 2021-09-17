import React from 'react'
import '../../index.css'

const oibInput = (props) => {

	let inputElement = null;

		if(props.elementType === 'oibInput'){

			inputElement = <div>
				<h4>{props.elementName}*</h4>
				<input 
				className="InputElement" 
				value={props.value}
                onChange={props.changed}
				type="number"
				maxlength="11"
                />
			</div>

		}
	

	return(
		
	<div className="Input">
		{inputElement}
	</div>

	
	);
};

export default oibInput;