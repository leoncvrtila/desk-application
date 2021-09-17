import React from 'react'
import '../../assets/css/input.scss'

const sexBtns = (props) => {

	let inputElement = null;

	switch (props.elementType) {

		case ('sexBtns'):
			inputElement = <div className="formBtnsWrap">
            <h4 className="btnsTittle">{props.elementName}*</h4>
             <div className="formBtns">
            
            {props.sexOpt.options.map(opt => (
                <div 
                className="formButtons"
                {...props.sexOpt}
                key={opt.id}
                ><input type="radio" name="radio0" id={opt.id} checked={props.radioValue}/><label htmlFor={opt.id} onClick={props.clickSex} >{opt.value}</label></div>
            ))}
            
			
                </div>
				<div className="cautionError" style={{display: (props.value === '') && (props.errorModal === true) ? 'block' : 'none', marginTop: '5%', marginLeft: 'auto', marginRight: 'auto'}}>⚠ Molim te odaberi spol</div>
				
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

export default sexBtns;