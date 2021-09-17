import React from 'react'
import '../../index.css'

const pensionerBtns = (props) => {

	let inputElement = null;

	switch (props.elementType) {

		case ('pensionerBtns'):
			inputElement = <div className="formBtnsWrap">
            <h4 className="btnsTittle">{props.elementName}</h4>
                <div className="formBtns">
                        
                {props.pensionerOpt.options.map(opt => (
                <div 
                className="formButtons"
                {...props.pensionerOpt}
                key={opt.id}
                ><input type="radio" name="radio2" id={opt.id} /><label htmlFor={opt.id} onClick={props.clickPensioner}>{opt.value}</label></div>
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

export default pensionerBtns;