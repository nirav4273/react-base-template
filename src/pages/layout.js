import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/header/index';


function PrivateRoute (props) {
	return (
		<Route path={props.path} exact render={() => {
			return false ? <div>{props.component}</div> : <Redirect to="/login" />
		}} ></Route>
	);
}

function PublicRoute (props) {
	return (
		<Route path={props.path} exact render={() => {
			return false ? <Redirect to="/dashboard" /> : <div>{props.component}</div>
		}} ></Route>
	);
}

function Layout () {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<PrivateRoute
					path={'/home'}
					isLogin={false}
					component={<div>home</div>}
				/>
				<PrivateRoute
					path={'/about'}
					isLogin={false}
					component={<div>about</div>}
				/>
				<PrivateRoute
					path={'/dashboard'}
					isLogin={false}
					component={<div>dashboard</div>}
				/>
				<PublicRoute
					path={'/login'}
					isLogin={false}
					component={<div>login</div>}
				/>
				{/* Need to redict on valid route if user loggedIn or not*/}
				<Route render={() => <Redirect to="/dashboard" />} />
			</Switch>
		</React.Fragment>
	);
}

export default Layout;