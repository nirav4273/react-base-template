import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/header/index';

import Home from './home/index';
import About from './about/index';
import Dashboard from './dashboard/index';
import Login from './login/index';

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
					component={<Home />}
				/>
				<PrivateRoute
					path={'/about'}
					isLogin={false}
					component={<About />}
				/>
				<PrivateRoute
					path={'/dashboard'}
					isLogin={false}
					component={<Dashboard />}
				/>
				<PublicRoute
					path={'/login'}
					isLogin={false}
					component={<Login />}
				/>
				{/* Need to redict on valid route if user loggedIn or not*/}
				<Route render={() => <Redirect to="/dashboard" />} />
			</Switch>
		</React.Fragment>
	);
}

export default Layout;