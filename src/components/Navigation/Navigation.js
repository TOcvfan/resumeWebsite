import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
		if(isSignedIn){
			return(
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('signout')} className='f3 link dim black pa3 pointer'>Sign Out </p>
					<p onClick={() => onRouteChange('cv')} className='f3 link dim black pa3 pointer'>CV </p>
					<p onClick={() => onRouteChange('car')} className='f3 link dim black pa3 pointer'>My Car </p>
					<p onClick={() => onRouteChange('caravan')} className='f3 link dim black pa3 pointer'>My Caravan </p>
					<p onClick={() => onRouteChange('application')} className='f3 link dim black pa3 pointer'>Application </p>
					<p onClick={() => onRouteChange('face')} className='f3 link dim black pa3 pointer'>Faceregignition app</p>
				</nav>
			);
	    } else {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('register')} className='f3 link dim black pa3 pointer'>Register </p>
				<p onClick={() => onRouteChange('signin')} className='f3 link dim black pa3 pointer'>Sign In </p>
				<p onClick={() => onRouteChange('cv')} className='f3 link dim black pa3 pointer'>CV</p>
			</nav>
		);
   	}
}

export default Navigation;