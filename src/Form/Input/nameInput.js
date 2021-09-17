import React from 'react'
import '../../index.css'

const nameInput = (props) => {

	let inputElement = null;

		if(props.elementType === 'nameInput'){

			inputElement = <div>
				<h4>{props.elementName}*</h4>
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

export default nameInput;