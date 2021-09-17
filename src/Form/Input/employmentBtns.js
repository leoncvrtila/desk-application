import React from 'react'
import '../../assets/css/input.scss'

const employmentBtns = (props) => {

	let inputElement = null;

	switch (props.elementType) {

		case ('employmentBtns'):
			inputElement = <div className="formBtnsWrap">
            <h4 className="btnsTittle">{props.elementName}</h4>
                <div className="formBtns">
                        
                {props.employmentOpt.options.map(opt => (
                <div 
                className="formButtons"
                {...props.employmentOpt}
                key={opt.id}
                ><input type="radio" name="radio1" id={opt.id} /><label htmlFor={opt.id} onClick={props.clickEmployment}>{opt.value}</label></div>
                    ))}

                </div>
            </div>
			break;	

		default: inputElement = null

	}

	return(
		
	<div className="Input">
		<label className="Label">{props.label}</label>
		{inputElement}
	</div>

	
	);
};

export default employmentBtns;