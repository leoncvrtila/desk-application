import React, {Component} from 'react'
import * as axios from 'axios'


import SexBtns from './Input/sexBtns'
import CountyInput from './Input/countyInput'
/*import CityInput from './Input/cityInput'
import TownshipInput from './Input/townshipInput'*/


import Success from './Success'

import Aux from '../hoc/Aux'
import Error from '../hoc/Error'
import '../assets/css/input.scss'



class Form extends Component {

	state={ 
		
		form: [],
		title: 'Pristupnica',
		errorModal: false, 						// ukoliko netko nesto krivo napise izbaci se modal
		image: null, 							// slika koja se ucita kada se odabere 
		url: '', 								// url ucitane slike nakon sta se uploada na firebase
		percentage: null, 						// postotak koji se prikaze prilikom postavljanja slike - da korisnik zna koliko treba
					// false - prema tome se definira value i background
		error: false, 							// ukoliko se desi neki problem prilikom ucitavanja forme ili slanja iste 
		response: false,
		redirect: false,
		firstNext: false,
		secondNext: false,
		firstBack: false,
		secondBack: false,
		currentStatus: [
			{id: 0,title: "Student", active: false},
			{id: 1,title: "Zaposlenik", active: false},
			{id: 2,title: "Vlasnik tvrtke", active: false},
			{id: 3,title: "Nezaposlen", active: false}
		],
		yearsOld: [
			{title: "18-24", active: false},
			{title: "25-34", active: false},
			{title: "35-44", active: false},
			{title: "45-54", active: false},
			{title: "55+", active: false}
		],
		inputs: [
			{id: 0, show: true, title: 'Koje je tvoje ime, ', type: 'text', active: false, btn: false},
			{id: 1, show: false, title: 'Koje je tvoje prezime, ', type: 'text', active: false, btn: false},
			{id: 2, show: false, title: ' , tvoj datum rođenja je?', type: 'date', active: false, btn: false},
			{id: 3, show: false, title: 'Koji je najbolji broj mobitela putem kojeg te možemo dobiti, ', type: 'number', active: false, btn: false},
			{id: 4, show: false, title: 'Koji je email putem kojeg te možemo dobiti, ', type: 'email', active: false, btn: false}
		],
		niche:'',
		revenue: '',
		goal: '',
		why: '',
		problem: '',
		invest: '',
		whyYou: '',
		howSoon: '',
		currentSituation: [
			{id: 0, des: 'Trenutno imam dovoljno novaca, vremena i energije za uložiti u razvitak svojeg poslovanja.', active: false},
			{id: 1, des: 'Kada se potrudim mogu smisliti načine kako doći do novaca i pronaći vremena za razvitak svojeg poslovanja.', active: false},
			{id: 2, des: 'NEMAM novaca, vremena i energije za uložiti u sebe i svoje poslovanje te ni ne planiram promijeniti svoju trenutnu situaciju.', active: false}
		],
		company: '',
		device: '',
		privacy: false,
		telNum: '',
		email: '',
		name: '',
		surname: '',
		country: ''
        
	}

	componentDidMount() {
        axios.get('https://desk-clients.firebaseio.com/form.json')
            .then(response => {
                this.setState({form: response.data});
			})


	let resolution = window.screen.width 
			
	if(resolution < 430){
		this.setState({
			device: 'Mob'
		})
	}

	if((resolution < 770) && (resolution > 430)){
		this.setState({
			device: 'Tablet'
		})
	}

	if(resolution > 770){
		this.setState({
			device: 'Laptop'
		})
	}

	/*const trackingId = "UA-174940740-1"
	ReactGA.pageview(window.location.pathname + window.location.search);
	ReactGA.initialize(trackingId);
	ReactGA.set({
	userId: currentUserId(),
	// any data that is relevant to the user session
	// that you would like to track with google analytics
	})
*/

    }


   /* checkValidity(value,rules) { // value -> event.target.value | rules -> this.state.form[formName].validation ( required: true, isPensioner: true)
		
		let isValid = true;
		
		if(rules.required) {
			isValid = value.trim() !== '' && isValid;
		}
		
		if(rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}
		
		if(rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}
		
		if(rules.isEmail) {
            const pattern = (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            isValid = pattern.test(value) && isValid
        }
        
        if(rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
		
		return isValid;
	}*/

	inputChangedHandler = (event, formName) => {
	   
		const updatedForm = {
            ...this.state.form,
            [formName]: {
                ...this.state.form[formName],
				value: event.target.value,
				//valid: this.checkValidity(event.target.value, this.state.form[formName].validation),
				valid: this.state.form[formName].value ? this.state.form[formName].value.length  : null,
                touched: true
            }
		};
		
		this.setState({form: updatedForm}); 


	}


	countyChangedHandler = (event, formName) => { // county

		
		const updatedForm = {
            ...this.state.form,
            [formName]: {
                ...this.state.form[formName],
				value: event.target.value,
				valueId: this.state.form.county.elementConfig.options[event.target.selectedIndex].id,
                touched: true
            }
		};
		
        this.setState({form: updatedForm}); 

	}

	
	clickSexHandler = (event, formName) => { // sex

		const updatedForm = {
            ...this.state.form,
            [formName]: {
                ...this.state.form[formName],
				value: event.target.innerText
            }
		};
		
		this.setState({form: updatedForm}); 

	}

	clickEmploymentHandler = (event, formName) => { // employment

		const updatedForm = {
            ...this.state.form,
            [formName]: {
                ...this.state.form[formName],
				value: event.target.innerText
            }
		};
		
		this.setState({form: updatedForm}); 
	}

	clickPensionerHandler = (event, formName) => { // pensioner

		const updatedForm = {
            ...this.state.form,
            [formName]: {
                ...this.state.form[formName],
				value: event.target.innerText
            }
		};
		
		this.setState({form: updatedForm}); 
	}

	 submitHandler = (e) => { 												// saljem podatke u member.json (firebase)
		
		e.preventDefault();
		

		const stateAll = this.state.form;

		let today = new Date();
		let dd = String(today.getDate()).padStart(2, '0');
		let mm = String(today.getMonth() + 1).padStart(2, '0'); 			//January is 0!
		let yyyy = today.getFullYear();
		
		
		let d = new Date();
		let n = d.getDay()
		let day

		if(n === 1){
			day = 'Ponedjeljak'
		}else if(n === 2){
			day = 'Utorak'
		}else if(n === 3){
			day = 'Srijeda'
		}else if(n === 4){
			day = 'Četvrtak'
		}else if(n === 5){
			day = 'Petak'
		}else if(n === 6){
			day = 'Subota'
		}else if(n === 0){
			day = 'Nedjelja'
		}

	

		if(																	// ukoliko su popunjena odredena polja onda se moze poslat inace iskoci modalni prozor
			(this.state.name !== '') &&
			(this.state.surname !== '') &&
			(stateAll.sex.value !== '') &&
			(
				(this.state.yearsOld[0].active === true) ||
				(this.state.yearsOld[1].active === true) ||
				(this.state.yearsOld[2].active === true) ||
				(this.state.yearsOld[3].active === true) ||
				(this.state.yearsOld[4].active === true)
			
			) &&
			(this.state.country !== '') &&
			(this.state.telNum !== '') &&
			(this.state.email !== '') &&
			(
				(this.state.currentStatus[0].active === true) ||
				(this.state.currentStatus[1].active === true) ||
				((this.state.currentStatus[2].active === true) && (this.state.company !== '')) ||
				(this.state.currentStatus[3].active === true) 
			) &&
			(this.state.niche !== '') &&
			(this.state.revenue !== '') &&
			(this.state.goal !== '') &&
			(this.state.why !== '') &&
			(this.state.problem !== '') &&
			(this.state.invest !== '') &&
			(
				(this.state.currentSituation[0].active === true) ||
				(this.state.currentSituation[1].active === true) ||
				(this.state.currentSituation[2].active === true) 
			) &&
			(this.state.whyYou !== '') &&
			(this.state.howSoon !== '')
		 ) {


		
				today = dd + '.' + mm + '.' + yyyy + '.'; 							// postavljajne danasnjeg datuma kao dan upisa
			
	    	 axios.post('https://desk-clients.firebaseio.com/potentional-clients.json', {
				name: this.state.name,
				surname: this.state.surname,
				sex: stateAll.sex.value,
				birthdate: this.state.yearsOld[0].active ? this.state.yearsOld[0].title : this.state.yearsOld[1].active ? this.state.yearsOld[1].title : this.state.yearsOld[2].active ? this.state.yearsOld[2].title : this.state.yearsOld[3].active ? this.state.yearsOld[3].title : this.state.yearsOld[4].active ? this.state.yearsOld[4].title : null,
				//county: stateAll.county.value,
				country: this.state.country === 'Hrvatska' ? 'Croatia' : this.state.country === 'Srbija' ? 'Serbia' : this.state.country === 'Bosna i Hercegovina' ? 'Bosnia and Herz.' : this.state.country === 'Slovenija' ? 'Slovenia' : '',
				tel: this.state.telNum,
				email: this.state.email,
				currentStatus: this.state.currentStatus[0].active ? this.state.currentStatus[0].title : this.state.currentStatus[1].active ? this.state.currentStatus[1].title : this.state.currentStatus[2].active ? this.state.currentStatus[2].title : this.state.currentStatus[3].active ? this.state.currentStatus[3].title : '',
				niche: this.state.niche,
				revenue: this.state.revenue,
				company: (this.state.company !== '') && (this.state.currentStatus[2].active === true) ? this.state.company : null,
				goal: this.state.goal,
				why: this.state.why,
				problem: this.state.problem,
				invest: this.state.invest,
				currentSituation: this.state.currentSituation[0].active ? this.state.currentSituation[0].des : this.state.currentSituation[1].active ? this.state.currentSituation[1].des : this.state.currentSituation[2].active ? this.state.currentSituation[2].des : null,
				whyYou: this.state.whyYou,
				howSoon: this.state.howSoon,
				potentional: true,
				date: today,
				day: day,
				device: this.state.device
			})
			
			.then(response => {
				//console.log('Sljedeće: >') 						     // ispisi ono sta je poslano
				//console.log(response)
				//this.setState({response: true});
				this.setState({
					redirect: true
				})
				
			})
			.catch(error => {
				this.setState({error: true});							// hoc error
			});
																												   				// prosljedivanje korisnika na success page
				//window.location.href = 'success'

		} else {
			
			this.setState(prevState => ({
				errorModal: true
			})) 
		}

		/*if(!this.state.response) {
			console.log('Nije prošao kroz axios')
		}

		if(this.state.response) {
			console.log('Prošao je kroz axios')
			window.location.href = 'success'
		}*/

	}
	
	errorModalHandler = () => {
		this.setState(prevState => ({									// error modal
			errorModal: !prevState.errorModal
		})) 
	}

	errorHandler = () => {	
        this.setState(prevState=>({
            error: !prevState.error
        }))
    }


	firstNextHandler = () => {

		if(
			(this.state.form.sex.value !== '') &&
			(this.state.name !== '') &&
			(this.state.surname !== '') &&
			(
				(this.state.yearsOld[0].active === true) ||
				(this.state.yearsOld[1].active === true) ||
				(this.state.yearsOld[2].active === true) ||
				(this.state.yearsOld[3].active === true) ||
				(this.state.yearsOld[4].active === true) 
			
				) &&
			(this.state.telNum !== '') &&
			(this.state.email !== '') &&
			(this.state.country === 'Hrvatska' || this.state.country === 'Srbija' || this.state.country === 'Slovenija' || this.state.country === 'Bosna i Hercegovina') 
		) {

			this.setState(prevState=>({
				firstNext: !prevState.firstNext,
				firstBack: false,
				errorModal: false
			}))

			console.log(this.state.errorModal)

		} else {

			/*let valid = []

			for(let key in this.state.form){

				valid.push({
					...this.state.form[key],
					valid: this.state.form[key].value ? true : false
				})

			}*/

			

			this.setState(prevState => ({									// error modal
				errorModal: !prevState.errorModal
			})) 
		}

	

	}

	secondNextHandler = () => {


		if(
			(
				(this.state.currentStatus[0].active === true) ||
				(this.state.currentStatus[1].active === true) ||
				(this.state.currentStatus[3].active === true) 
			) &&
			(this.state.niche !== '') &&
			(this.state.revenue !== '') &&
			(this.state.goal !== '') 
		) {

			this.setState(prevState=>({
				secondNext: !prevState.secondNext,
				secondBack: false,
				errorModal: false
			}))

		} else if(
			(this.state.currentStatus[2].active === true)&&
			(this.state.company !== '') &&
			(this.state.company !== 'Odaberi') &&
			(this.state.niche !== '') &&
			(this.state.revenue !== '') &&
			(this.state.goal !== '') 
		) {

			this.setState(prevState=>({
				secondNext: !prevState.secondNext,
				secondBack: false,
				errorModal: false
			}))

		} else {
			this.setState(prevState => ({									// error modal
				errorModal: true
			})) 
		}

		/*this.setState(prevState=>({
			secondNext: !prevState.secondNext,
			secondBack: false
		}))*/

	}

	firstBackHandler = () => {

		this.setState({
			firstBack: true,
			firstNext: false,
			secondBack: false
		})

	}

	secondBackHandler = () => {

		this.setState({
			secondBack: true,
			secondNext: false
		})

	}

	currentStatusHandler = (e,id) => {
		
		const formElementsArray = []

		let i

		for(i = 0; i < this.state.currentStatus.length; i++){
			formElementsArray.push({
				title: this.state.currentStatus[i].title,
				active: (id===this.state.currentStatus[i].title) ? true : false,
				id: this.state.currentStatus[i].id
			});
		}

		this.setState({
			currentStatus: formElementsArray
		})


	}

	yearsOldHandler = (e,id) => {
		
		const formElementsArray = []

		let i

		for(i = 0; i < this.state.yearsOld.length; i++){
			formElementsArray.push({
				title: this.state.yearsOld[i].title,
				active: (id===this.state.yearsOld[i].title) ? true : false
			});
		}

		this.setState({
			yearsOld: formElementsArray
		})


	}

	currentSituationHandler = (e,id) => {
		
		const formElementsArray = []

		let i

		for(i = 0; i < this.state.currentSituation.length; i++){
			formElementsArray.push({
				id: this.state.currentSituation[i].id,
				des: this.state.currentSituation[i].des,
				active: (id===this.state.currentSituation[i].id) ? true : false
			});
		}

		this.setState({
			currentSituation: formElementsArray
		})


	}
	
	inputsActiveHandler = (e,id) =>{

		let inputs = []

		for(let key in this.state.inputs){

			inputs.push({
				id: this.state.inputs[key].id,
				title: this.state.inputs[key].title,
				type: this.state.inputs[key].type,
				active: (this.state.inputs[key].id === id) ? true : false,
				btn: this.state.inputs[key].btn
			})

		}


		this.setState({
			inputs: inputs
		})

	}

	checkBtnHandler = (e,id) =>{


		let inputs = []
		let i
		for(i = 0; i < this.state.inputs.length; i++){
			
			inputs.push({
				[id+1]:{
					id: this.state.inputs[id+1].id,
					title: this.state.inputs[id+1].title,
					type: this.state.inputs[id+1].type,
					active: this.state.inputs[id+1].active,
					show: true,
					btn: false,
				}
			})

		}

	
		this.setState({
			//inputs: inputs
		})

		console.log(inputs)

	}

	inputChangeHandler = (e) => {

		this.setState({
			[e.target.name]: e.target.value
		});
		
	}

	privacyHandler = () => {

		this.setState(prevState => ({
			privacy: !prevState.privacy
		}))

	}

    render() {

		if(this.state.redirect){
			return <Success name={this.state.name} />
		}

	     	
	const formElementsArray = [];									// prolazi kroz form i pretvara ga u array
	for (let key in this.state.form) {
		formElementsArray.push({
			id: key,
			config: this.state.form[key]
		});
	}


	let countyInput = formElementsArray.map(formElement => (
		<CountyInput 
			key={formElement.id}
			elementType={formElement.config.elementType}
			elementName={formElement.config.elementName}
			elementConfig={formElement.config.elementConfig}
			value={formElement.config.value}
			errorModal={this.state.errorModal}
			changedCounty={(event) => this.countyChangedHandler(event, formElement.id)}
		/>
	));

	/*let cityInput = formElementsArray.map(formElement => (
		<CityInput 
			key={formElement.id}
			elementType={formElement.config.elementType}
			elementName={formElement.config.elementName}
			elementConfig={formElement.config.elementConfig}
			citySelect={this.state.form.county.elementConfig.options[this.state.form.county.valueId].city} // to je lista gradova ciji je popis unutar objekta od zupanija
			value={formElement.config.value}
			changed={(event) => this.inputChangedHandler(event, formElement.id)}
		/>
	));

	let townshipInput = formElementsArray.map(formElement => (
		<TownshipInput 
			key={formElement.id}
			elementType={formElement.config.elementType}
			elementName={formElement.config.elementName}
			elementConfig={formElement.config.elementConfig}
			townshipSelect={this.state.form.county.elementConfig.options[this.state.form.county.valueId].township}
			value={formElement.config.value}
			changed={(event) => this.inputChangedHandler(event, formElement.id)}
		/>
	));*/


	let sexBtns = formElementsArray.map(formElement => (
		<SexBtns 
			key={formElement.id}
			elementType={formElement.config.elementType}
			elementName={formElement.config.elementName}
			elementConfig={formElement.config.elementConfig}
			sexOpt={formElement.config.sexOpt}
			value={formElement.config.value}
			innerValue={formElement.config.value}
			radioValue={this.state.radioValue}
			errorModal={this.state.errorModal}
			clickSex={(event) => this.clickSexHandler(event, formElement.id)}
		/>
	));

	let sexPush=[]

	for(let key in this.state.form.sex){
		sexPush = [this.state.form.sex.value]
	}

	let namePush= []

	for(let key in this.state.form.name){
		namePush = [this.state.name]
	}

/**
 * {id: 0,title: "Student", active: false},
			{id: 1,title: "Zaposlenik", active: false},
			{id: 2,title: "Vlasnik tvrtke", active: false},
			{id: 3,title: "Nezaposlen", active: false}
 */

	let currentStatus = this.state.currentStatus.map( s => (

		<div key={s.title} className="currentStatus" style={{background: s.active ? '#6d6d6d' : '#c3ab7d'}} onClick={(e) => this.currentStatusHandler(e,s.title)}>
			{
				s.id === 0 && sexPush[0] === "Žensko" ? "Studentica" : s.id === 1 && sexPush[0] === "Žensko" ? "Zaposlenica" : s.id === 2 && sexPush[0] === "Žensko" ? "Vlasnica tvrtke" : s.id === 3 && sexPush[0] === "Žensko" ? "Nezaposlena" : s.title
			}
		</div>

	));

	let yearsOld = this.state.yearsOld.map( s => (

		<div key={s.title} className="currentStatus" style={{background: s.active ? '#6d6d6d' : '#c3ab7d'}} onClick={(e) => this.yearsOldHandler(e,s.title)}>
			{s.title}
		</div>

	));


	
	/*let inputs = this.state.inputs.map(i => (

		<div key={i.id} style={{}}>
			<h4>{i.title}</h4>
			<input className="InputElement" type={i.type} onChange={(e) => this.inputsActiveHandler(e, i.id)} />
			<div style={{display: i.active ? 'block' : 'none'}} onClick={(e) => this.checkBtnHandler(e, i.id)}>✓</div>
		</div>

	));*/

	let currentSituation = this.state.currentSituation.map( s => (

		<div key={s.id} className="currentSituation" style={{background: s.active ? '#6d6d6d' : '#c3ab7d'}} onClick={(e) => this.currentSituationHandler(e,s.id)}>
			{s.des}
		</div>

	));


	let surnamePush = []

	for(let key in this.state.form.surname){
		surnamePush = [this.state.surname]
	}
	
	let birthdatePush = []

	for(let key in this.state.form.birthdate){
		birthdatePush = [this.state.form.birthdate.value]
	}

	let telPush = []

	for(let key in this.state.form.tel){
		telPush = [this.state.telNum]
	}

	let emailPush = []

	for(let key in this.state.form.email){
		emailPush = [this.state.email]
	}

	let countyPush = []

	for(let key in this.state.form.county){
		countyPush = [this.state.form.county.value]
	}
	
	let allQuestions = [
		
			{active: (sexPush[0] === '') || (sexPush[0] === undefined) ? false : true},
			{active: (namePush[0] === '') || (namePush[0] === undefined) ? false : true},
			{active: (surnamePush[0] === '') || (surnamePush[0] === undefined) ? false : true},
			{active: ((this.state.yearsOld[0].active === true) || (this.state.yearsOld[1].active === true) || (this.state.yearsOld[2].active === true) || (this.state.yearsOld[3].active === true) || (this.state.yearsOld[4].active === true) ? true : false )},
			{active: (telPush[0] === '')  || (telPush[0] === undefined)? false : true},
			{active: (emailPush[0] === '')  || (emailPush[0] === undefined)? false : true},
			{active: this.state.country ? true : false},
			{active: (this.state.currentStatus[0].active===true) || (this.state.currentStatus[1].active===true) || ((this.state.currentStatus[2].active===true) && (this.state.company !== '')) || (this.state.currentStatus[3].active===true) ? true : false},
			{active: this.state.niche ? true : false},
			{active: this.state.revenue ? true : false},
			{active: this.state.goal ? true : false},
			{active: this.state.why ? true : false},
			{active: this.state.problem ? true : false},
			{active: this.state.invest ? true : false},
			{active:  (this.state.currentSituation[0].active===true) || (this.state.currentSituation[1].active===true) || (this.state.currentSituation[2].active===true) ? true : false},
			{active: this.state.whyYou ? true : false},
			{active: this.state.howSoon ? true : false}
		
	]

	let count = []

	for(let key in allQuestions){
		if(allQuestions[key].active === true){

			count.push({
				[key]: allQuestions[key]
			})
			
		}
	}


	let rez = 0
	rez = (count.length*100)/allQuestions.length 
	


    return (

		
			
			<Aux>

				<Error
                error={this.state.error}
                errorHandler={this.errorHandler}
                /> 


				<div className="formWrap">
					<h1>Prijavi Se Za BESPLATAN Poziv</h1>
					<h2>Kreni Graditi Svoju Uspješnu Budućnost Već Od DANAS</h2>
					<p>Popuni formu kako bi se potvrdio termin. Odgovori što detaljnije kako bi ti što kvalitetnije mogli pomoći u pozivu.</p>
					
					<div className="Form">
						<form>

								<h5 style={{marginTop: '2%', textAlign: 'center'}}>{Math.floor(rez) + '%' + ' ispunjeno'}</h5>
								<div className="Counter" style={{width: rez + '%', background: (rez === 0) ? 'white' : '#6a7682', height: '8px', marginBottom: '3%', marginTop: '2%'}}>
								</div>								
								
								<div style={{display: (this.state.firstNext === true) ? (this.state.firstBack === true) ? 'block' : 'none' : 'block'}}>

									<div className="titleDes">
										<h3>Osnovne informacije</h3>
									</div>

									{sexBtns}

									<div className="inputWrapp">

										<h4>Kako se zoveš?*</h4>
										<input className="InputElement" value={this.state.name} onChange={this.inputChangeHandler} type="text" name="name" style={{}} />
										<div className="cautionError" style={{display: (this.state.name === '') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>

									</div>

									<div className="inputWrapp">

										<h4>Kako se prezivaš?*</h4>
										<input className="InputElement" value={this.state.surname} onChange={this.inputChangeHandler} type="text" name="surname"/>
										<div className="cautionError" style={{display: (this.state.surname === '') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>

									</div>

									<h4 className="h4q" style={{marginTop: this.state.device === 'Laptop' ? '8%' : '11.5%'}}>Koliko imaš godina?</h4>
									{yearsOld}
									<div style={{display: ((this.state.yearsOld[0].active === false) && (this.state.yearsOld[1].active === false) && (this.state.yearsOld[2].active === false) && (this.state.yearsOld[3].active === false) && (this.state.yearsOld[4].active === false)) && (this.state.errorModal === true) ? 'block' : 'none', fontSize: '12px', padding: '10px', marginTop: '1%', background: '#de5959', color: 'white', textAlign: 'center', width: this.state.device === 'laptop' ? '15%' : this.state.device === 'Tablet' ? '23%' : '35%', marginLeft: 'auto', marginRight: 'auto'}}>⚠ Molim te odaberi opciju</div>

									<div className="inputWrapp">

										<h4>Točan broj mobitela putem koje te možemo dobiti?*</h4>
										<input className="InputElement" value={this.state.telNum} onChange={this.inputChangeHandler} type="number" name="telNum"/>
										<div className="cautionError" style={{display: (this.state.telNum === '') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>

									</div>

									<div className="inputWrapp">

										<h4>Najbolji email putem kojeg te možemo kontaktirati?*</h4>
										<input className="InputElement" value={this.state.email} onChange={this.inputChangeHandler} type="email" name="email"/>
										<div className="cautionError" style={{display: (this.state.email === '') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>

									</div>

									<div className="inputWrapp">

										<h4>Država stanovanja?*</h4>
										<select className="InputElementNew" type="text" value={this.state.country} name="country" onChange={this.inputChangeHandler}>
											<option>Odaberi</option>
											<option>Hrvatska</option>
											<option>Srbija</option>
											<option>Bosna i Hercegovina</option>
											<option>Slovenija</option>
										</select>
										<div className="cautionError" style={{display: (this.state.country === '' || this.state.country === 'Odaberi') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>

									</div>



									{
									//countyInput
									}
									{
									//cityInput
									}
									{
									//townshipInput
									}

									<div 
									className="nextBtn" 
									onClick={this.firstNextHandler} 
									style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
									DALJE</div>

								</div>

								<div style={{display: (this.state.firstNext === true) && (this.state.secondNext === false) && (this.state.firstBack === false) || (this.state.secondBack === true) ? 'block' : 'none'}}>

									<div className="titleDes">
										<h3>Trenutna situacija i ciljevi</h3>
									</div>



										<h4 className="h4q" style={{marginTop: this.state.device === 'Laptop' ? '8%' : '11.5%'}}>{namePush}, čime se trenutno baviš?*</h4>
										{currentStatus}

										<div style={{display: ((this.state.currentStatus[0].active === false) && (this.state.currentStatus[1].active === false) && (this.state.currentStatus[2].active === false) && (this.state.currentStatus[3].active === false)) && (this.state.errorModal === true) ? 'block' : 'none', fontSize: '12px', padding: '10px', marginTop: '5%', background: '#de5959', color: 'white', textAlign: 'center', width: '15%', margin: 'auto'}}>⚠ Molim te odaberi opciju</div>

									
									<div className="currentSituationDiv" style={{display: this.state.currentStatus[2].active ? 'block' : 'none'}}>
										<h4 className="h4q">Da li je ovo namijenjeno za tvoju trenutnu tvrtku ili za novu tvrtku?*</h4>

										<select className="InputElementNew" type="text" value={this.state.company} name="company" onChange={this.inputChangeHandler}>
											<option>Odaberi</option>
											<option>Za trenutnu tvrtku</option>
											<option>Za novu tvrtku</option>
										</select>

										<div className="currentSituationDivError" style={{display: (this.state.company === '') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>
									</div>

									<div  style={{display: (this.state.currentStatus[0].active === true) || (this.state.currentStatus[1].active === true) || (this.state.currentStatus[2].active === true) || (this.state.currentStatus[3].active === true)? 'block' : 'none'}}>

									<div className="currentSituationDiv">

										<h4 className="h4q">{(this.state.currentStatus[2].active===true) && ((this.state.company === '') || (this.state.company === 'Odaberi') || (this.state.company === 'Za trenutnu tvrtku')) ? 'Ukratko opiši čime se tvoja tvrtka bavi?' : 'Ukratko opiši čime će se tvoja tvrtka baviti?*'}</h4>

										<input className="InputElementNew" type="text" value={this.state.niche} name="niche" onChange={this.inputChangeHandler} />

										<div className="currentSituationDivError" style={{display: (this.state.niche === '') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>

									</div>

									<div className="currentSituationDiv">

										<h4 className="h4q">{namePush}, koliko iznose tvoji godišnji prihodi?*</h4>

										<input className="InputElementNew" type="number" value={this.state.revenue} name="revenue" onChange={this.inputChangeHandler} />

										<div className="currentSituationDivError"  style={{display: (this.state.revenue === '') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>

									</div>

									<div className="currentSituationDiv">

										<h4 className="h4q">Kada izgradiš poslovanje, koliko bi {(sexPush[0] === 'Žensko') ? ' željela ' : ' želio '} zarađivati godišnje?*</h4>

										<input className="InputElementNew" type="number" value={this.state.goal} name="goal" onChange={this.inputChangeHandler} />

										<div className="currentSituationDivError"  style={{display: (this.state.goal === '') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>

									</div>

									</div>

									<div className="btnsWrap">

										<div 
										className="submitBtn" 
										onClick={this.firstBackHandler} 
										style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '3%'}}>
										NATRAG</div>

										<div 
										className="submitBtn" 
										onClick={this.secondNextHandler} 
										style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '3%'}}>
										<a href="#secondNext" style={{textDecoration: 'none', color: 'white'}}>DALJE</a></div>

									</div>

								</div>

								<div style={{display: (this.state.secondNext === true) && (this.state.secondBack === false) ? 'block' : 'none'}} id="secondNext">

									<div className="titleDes">
										<h3>Trenutna situacija i ciljevi</h3>
									</div>

									<div className="currentSituationDiv">

										<h4 className="h4q">Zašto bi baš toliko  {(sexPush[0] === 'Žensko') ? 'htjela' : 'htio'} zarađivati? Koja je tvoja glavna motivacija iza tog cilja?*</h4>
										<input className="InputElementNew" type="text" value={this.state.why} name="why" onChange={this.inputChangeHandler} />

										<div className="currentSituationDivError" style={{display: (this.state.why === '') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>

									</div>

									<div className="currentSituationDiv">

										<h4 className="h4q">Koji je glavni problem u postizanju cilja, {namePush}?*</h4>
										<input className="InputElementNew" type="text" value={this.state.problem} name="problem" onChange={this.inputChangeHandler} />

										<div className="currentSituationDivError"  style={{display: (this.state.problem === '') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>

									</div>

									<div className="currentSituationDiv">

										<h4 className="h4q">Koliko si novaca {(sexPush[0] === 'Žensko') ? 'spremna' : 'spreman'} uložiti da se ostvare tvoji snovi i da izgradiš dugoročno i uspješno poslovanje?*</h4>
										<input className="InputElementNew" type="number" value={this.state.invest} name="invest" onChange={this.inputChangeHandler} />

										<div className="currentSituationDivError" style={{display: (this.state.invest === '') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>

									</div>

									<h4 className="h4q" style={{marginTop: this.state.device === 'Laptop' ? '8%' : '12%'}} >Koja je tvoja trenutna situacija?</h4>
									{currentSituation}

									<div className="currentSituationDivError" style={{display: ((this.state.currentSituation[0].active === false) && (this.state.currentSituation[1].active === false) && (this.state.currentSituation[2].active === false)) && (this.state.errorModal === true) ? 'block' : 'none', width: '15%', margin: 'auto', marginTop: '1%'}}>⚠ Molim te odaberi opciju</div>

									<div className="currentSituationDiv" >

										<h4 className="h4q" >Svakog mjeseca prihvaćamo samo limitirani broj novih podnositelja zahtjeva s kojima radimo na razvitku njihovog poslovanja. Kandidate odabiremo na temelju kriterija i prema vjerojatnosti koliko određeni kandidat ima potencijala za ostvariti svoje ciljeve. Zašto bismo baš tebe odabrali?*</h4>
										<input className="InputElementNew" type="text" value={this.state.whyYou} name="whyYou" onChange={this.inputChangeHandler} />

										<div className="currentSituationDivError" style={{display: (this.state.whyYou === '') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>

									</div>

									<div className="currentSituationDiv">

										<h4 className="h4q">Ako će tvoj zathjev biti odobren, kada bi {(sexPush[0] === 'Žensko') ? ' mogla ' : ' mogao '} započeti sa razvitkom svojeg poslovanja?*</h4>

										<select className="InputElementNew" value={this.state.howSoon} name="howSoon" onChange={this.inputChangeHandler}> 
												<option>Odaberi</option>
												<option>Odmah - unutar 2 dana</option>
												<option>Ovaj tjedan</option>
												<option>Ovaj mjesec</option>
												<option>Možda kasnije</option>
										</select>

										<div className="currentSituationDivError" style={{display: (this.state.howSoon === '') && (this.state.errorModal === true) ? 'block' : 'none'}}>⚠ Molim te ispuni polje</div>

									</div>

									<div className="btnsWrap">

										<div 
										className="submitBtn" 
										onClick={this.secondBackHandler} 
										style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '3%'}}>
										NATRAG</div>

										<button  onClick={this.submitHandler} className="submitBtn" style={{display:
											(this.state.why !== '') &&
											(this.state.problem !== '') &&
											(this.state.invest !== '') &&
											(
												(this.state.currentSituation[0].active === true) ||
												(this.state.currentSituation[1].active === true) ||
												(this.state.currentSituation[2].active === true) 
											) &&
											(this.state.whyYou !== '') &&
											(this.state.howSoon !== '')
											? 'block' : 'none'}}>
										POŠALJI</button>

									</div>
									

								</div>


							

							<br /><hr />
							<div className="privacy" onClick={this.privacyHandler}>Pravila privatnosti</div>					
							<h6 style={{display: this.state.privacy ? 'block' : 'none'}}>
							Slanjem ove Pristupnice prihvaćam Pravila privatnosti INUP-a te sam suglasan da se sukladno Uredba (EU) 2016/679 Europskog parlamenta i Vijeća od 27. travnja 2016. o zaštiti pojedinaca u vezi s obradom osobnih podataka i o slobodnom kretanju takvih podataka te o stavljanju izvan snage Direktive 95/46/EZ

							(Opća uredba o zaštiti podataka)

							SL EU L119 , moji osobni podaci mogu koristiti i obrađivati. 

							INUP će osigurati sve mjere zaštite osobnih podataka za klijente INUP-a, sukladno Uredba (EU) 2016/679 Europskog parlamenta i Vijeća od 27. travnja 2016. o zaštiti pojedinaca u vezi s obradom osobnih podataka i o slobodnom kretanju takvih podataka te o stavljanju izvan snage Direktive 95/46/EZ

							(Opća uredba o zaštiti podataka)

							SL EU L119 . 
							</h6>

							<hr /><br />

						</form>
					</div>
				</div>

			</Aux>

        );

    }

}


export default Form; 
/*
<div className="errorModal" style={{display: this.state.errorModal ? 'flex' : 'none'}} onClick={this.errorModalHandler}><span>Provjerite jeste li ispunili sva obavezna polja.</span><span>x</span></div>
*/