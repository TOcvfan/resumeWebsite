import React from 'react';

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			age: '',
			contact: '',
			gender: ''
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onAgeChange = (event) => {
		this.setState({age: event.target.value})
	}

	onContactChange = (event) => {
		this.setState({contact: event.target.value})
	}

	onGenderChange = (event) => {
		this.setState({gender: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
				age: this.state.age,
				contact: this.state.contact,
				gender: this.state.gender	
			})
		})
		.then((response) => (response.json()))
		.then((user) => {
		 if (user) {
		 	this.props.loadUser(user);
			this.props.onRouteChange('signin');
		}
	  })
	}

	render() {
		//const { onRouteChange } = this.props;
		return (
			<article className="br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
			<div className="w-80 w-70-m w-100-l fr">
				<header className="pa3 bb b--light-gray relative">
					<h1 className="b ma0 f3">Register</h1>
					</header>
						<div id="register-form" action="" className="ph3 pt3 pb4 f7">
							<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">Username</label>
								<input 
									name="username" 
									type="text" 
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
									onChange={this.onNameChange}
								/>
							</div>
							<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">Email</label>
								<input 
									name="email" 
									type="email" 
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray"
									onChange={this.onEmailChange} 
								/>
							</div>
							<div className="mb4">
								<label htmlFor="" className="db ttu b lh-copy">Password</label>
								<input 
									name="password" 
									type="password" 
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
									onChange={this.onPasswordChange}
								/>
							</div>
							<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">age</label>
								<input 
									name="age" 
									type="number" 
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
									onChange={this.onAgeChange}
								/>
							</div>
							<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">How you know me</label>
								<select id="contact" name="relation" onChange={this.onContactChange} className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray">
    								<option value="Family">Family</option>
    								<option value="Girlfriend">Girlfriend</option>
    								<option value="Employer">Employer</option>
    								<option value="Friend" defaultValue>Friend</option>
									<option value="Colleague">Colleague</option>
  								</select>
							</div>
							<div className="mb4">
								<div className="form-check">
						          <label className="db ttu b lh-copy">
						            <input
						              type="radio"
						              name="react-tips"
						              value="male"
						              className="form-check-input"
						              onChange={this.onGenderChange}
						            />
						            Male
						          </label>
						        </div>

						        <div className="form-check">
						          <label className="db ttu b lh-copy">
						            <input
						              type="radio"
						              name="react-tips"
						              value="female"
						              className="form-check-input"
						              onChange={this.onGenderChange}
						            />
						            Female
						          </label>
						        </div>
							</div>
							<div className="tc">
								<input type="submit" value="Register" onClick={this.onSubmitSignIn} className="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow" />
							</div>
						</div>
					</div>
				</article>
			);
	}
}

export default Register;