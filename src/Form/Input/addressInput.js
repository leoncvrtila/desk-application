import React from 'react'
import '../../assets/css/input.scss'

const addressInput = (props) => {

	let inputElement = null;

		if(props.elementType === 'addressInput'){

			inputElement = <div>
				<h4>{props.elementName} (ulica i broj, mjesto)*</h4>
				<input 
				className="InputElement" 
				value={props.value}
                onChange={props.changed}
                type="text"
                />
			</div>

		}
	

	return(
		
	<div className="Input">
		{inputElement}
	</div>

	
	);
};

export default addressInput;