import React from 'react'
import '../../assets/css/input.scss'

const qualificationInput = (props) => {

	let inputElement = null;

	switch (props.elementType) {

		case ('qualificationsSelect'):
			inputElement = <div>
            <h4>{props.elementName}*</h4>
            <select 
            className="InputElement" 
            value={props.value}
            onChange={props.changed}> 
                {props.elementConfig.options.map(opt => (
                    <option key={opt.value} value={opt.displayValue}>
                        {opt.displayValue}
                    </option>
                ))}
            </select>
            </div>
			break;	

		default: inputElement = null
			/*inputElement = <input 
				className="InputElement" 
				{...props.elementConfig} 
				value={props.value}
				onChange={props.changed}
			//	style={{border: props.touched && props.invalid ? '1px solid red' : '1px solid black'}}
				/>;*/
	}

	return(
		
	<div className="Input">
		<label className="Label">{props.label}</label>
		{inputElement}
	</div>

	
	);
};

export default qualificationInput;