import React from 'react'
import '../../assets/css/input.scss'

const telInput = (props) => {

	let inputElement = null;

		if(props.elementType === 'telInput'){

			inputElement = <div>
				<h4>Točan broj mobitela putem koje te možemo dobiti?*</h4>
				<input 
				className="InputElement" 
				value={props.value}
                onChange={props.changed}
                type="number"
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

export default telInput;