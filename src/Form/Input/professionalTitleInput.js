import React from 'react'
import '../../assets/css/input.scss'

const professionalTitleInput = (props) => {

	let inputElement = null;

		if(props.elementType === 'professionalTitleInput'){

			inputElement = <div>
				<h4>{props.elementName}</h4>
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

export default professionalTitleInput;