import React from "react";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from "@material-ui/icons/Person";


import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '839328378204-jjqt2aer47ltfp46b7fi3do4r7g7o3df.apps.googleusercontent.com',
				scope: 'email'
			}).then(() => {
				// Shorthand for Google API
				this.auth = window.gapi.auth2.getAuthInstance();
				// Change the isSignedIn state
				this.onAuthChange(this.auth.isSignedIn.get())
				// Listen for the isSignedIn from Google API
				this.auth.isSignedIn.listen(this.onAuthChange);
			})
		});
	}

	// Pass data from API to Props
	onAuthChange = (isSignedIn) => {
		isSignedIn ? this.props.signIn() : this.props.signOut();
	}

	onClickSignIn = () => {
		this.auth.signIn();
	}

	onClickSignOut = () => {
		this.auth.signOut();
	}

	renderButton() {
		if (this.props.isSignedIn === null) {
			return null
		} else if (this.props.isSignedIn) {
			return (
				<ListItem onClick={this.onClickSignOut} button key="sign-out">
					<ListItemIcon><PersonIcon /></ListItemIcon>
					<ListItemText primary="Sign Out" />
				</ListItem>
			)
		} else {
			return (
				<ListItem onClick={this.onClickSignIn} button key="sign-in">
					<ListItemIcon><PersonIcon /></ListItemIcon>
					<ListItemText primary="Sign In" />
				</ListItem>
			)
		}
	}

	render() {
		return (
			<List>
			  {this.renderButton()}
		  </List>
		)
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn }
}

export default connect (
	mapStateToProps, 
	{ signIn, signOut }
)(GoogleAuth);