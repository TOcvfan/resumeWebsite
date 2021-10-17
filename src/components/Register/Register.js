import React from 'react';
//import Dropdown from 'react-dropdown';
//import 'react-dropdown/style.css';
import FormValidator from './FormValidator';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
/*const options = [
  'Family',
  'Girlfriend',  
  'Employe',
  'Friend',
  'Colleague'
];*/

class Register extends React.Component {
	constructor(props){
		super(props);

		this.validator = new FormValidator([
	  {
	  	field: 'name', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Name is required.' 
	  },
      { 
        field: 'email', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Email is required.' 
      },
      { 
        field: 'email',
        method: 'isEmail', 
        validWhen: true, 
        message: 'That is not a valid email.'
      },
      { 
        field: 'password', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Password is required.'
      },
      { 
        field: 'password_confirmation', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Password confirmation is required.'
      },
      { 
        field: 'password_confirmation', 
        method: this.passwordMatch,
        validWhen: true, 
        message: 'Password and password confirmation do not match.'
      }
	]);
	this.state = {
			name: '',
			email: '',
			password: '',
			password_confirmation: '',
			age: '',
			//contact: '',
			gender: '',
			validation: this.validator.valid()
		}
		this.submitted = false;
	}

	passwordMatch = (confirmation, state) => (state.password === confirmation)

	handleInputChange = (event) => {
		//event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value,
		});
	}


	onSubmitSignIn = (event) => {
		//event.preventDefault();
		const validation = this.validator.validate(this.state);
		this.setState({ validation });
		this.submitted = true;
		if (validation.isValid){
			fetch('https://nameless-ocean-57332.herokuapp.com/register', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					name: this.state.name,
					email: this.state.email,
					password: this.state.password,
					age: this.state.age,
					//contact: this.state.contact,
					gender: this.state.gender	
				})
			})
			.then((response) => (response.json()))
			.then((user) => {
			 if (user) {
			 	this.props.loadUser(user);
				this.props.onRouteChange('signin');
			}
		  })}
			
	}

	render() {
		//const defaultOption = options[3];
		let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation;
		//const { email } = this.state;
		return (
			<article className="br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center container">
			<div className="w-80 w-70-m w-100-l fr">
				<header className="pa3 bb b--light-gray relative">
					<h1 className="b ma0 f3 container">Register</h1>
					</header>
					<form className="form-type-material">
						<div id="register-form" action="" className="ph3 pt3 pb4 f7">
							<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">Username</label>
								<input required
									name="name" 
									placeholder="Your Name here"
									type="text" 
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
									onChange={this.handleInputChange}
								/>
								<span style={{color: 'red'}}>{validation.name.message}</span>
							</div>
							<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">Email</label>
								<input required
									name="email" 
									type="email" 
									placeholder="Your Email here"
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray"
									onChange={this.handleInputChange} 
								/>
								<span style={{color: 'red'}}>{validation.email.message}</span>
							</div>
							<div className="mb4">
								<label htmlFor="" className="db ttu b lh-copy">Password</label>
								<input required
									name="password" 
									type="password" 
									placeholder="Your Password here"
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
									onChange={this.handleInputChange}
								/>
								<span style={{color: 'red'}}>{validation.password.message}</span>
							</div>
							<div className="mb4">
								<label htmlFor="" className="db ttu b lh-copy">Password confirmation</label>
								<input 
									name="password_confirmation" 
									type="password" 
									placeholder="Repeat Your Password here"
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
									onChange={this.handleInputChange}
								/>
								<span style={{color: 'red'}}>{validation.password_confirmation.message}</span>
							</div>
							<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">age</label>
								<input required
									name="age" 
									type="number" 
									placeholder="Your Age here"
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
									onChange={this.handleInputChange}
								/>
							</div>
							{/*<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">How you know me</label>
								<Dropdown options={options} onChange={this._onContactChange} placeholder="Select an option" />
							</div>
							*/}
							<RadioGroup onChange={this.handleInputChange} Vertical>
  								<RadioButton value="Male">
								    Male
								  </RadioButton>
								  <RadioButton value="Female">
								    Female
								  </RadioButton>
								</RadioGroup>
							<div className="tc">
								<button 
									type="submit" 
									value="Register" 
									onClick={this.onSubmitSignIn} 
									className="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow">Register</button>
							</div>
						</div>
						</form>
					</div>
				</article>
			);
	}
}

export default Register;