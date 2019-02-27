import React from 'react';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
		console.log(props);
		console.log(this.state.signInPassword);
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
		 if (user.id) {
		 	this.props.loadUser(user)
			this.props.onRouteChange('home');
		}
	  })

	}

	render(){
		return (
		<article className="br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
			<div className="w-80 w-70-m w-100-l fr">
				<header className="pa1 bb b--light-gray relative center">
					<h1 className="b ma0 f1 center">Sign In</h1>
					</header>
						<div id="Signin-form" action="" className="ph1 pt3 pb4 f7">
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
							<div className="tc">
								<input type="submit" value="Sign In" onClick={this.onSubmitSignIn} className="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow pointer" />
							</div>
						</div>
					</div>
				</article>
			);
	}
	
}

export default Login;