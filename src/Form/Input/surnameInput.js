import React from 'react'
import '../../assets/css/input.scss'

const surnameInput = (props) => {

	let inputElement = null;

		if(props.elementType === 'surnameInput'){

			inputElement = <div>
				<h4>Kako se prezivaš?*</h4>
				<input 
				className="InputElement" 
				value={props.value}
                onChange={props.changed}
                type="text"
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

export default surnameInput;