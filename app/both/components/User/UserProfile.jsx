UserProfile = React.createClass({
	getInitialState() {
	    return {
	        profileState: "viewing",
	        role: User.get().profile.role,
	        email: User.get().profile.email,
	        firstName: User.get().profile.firstName,
	        lastName: User.get().profile.lastName,
	    };
	},
	toggleProfile() {
		var state;
		if(this.state.profileState === "viewing") {
			state = "editing";
		} else {
			state = "viewing";
		}
		this.setState({profileState: state});
	},
	createFirstName() {
		Meteor.users.update(User.id(), {$set: {"profile.firstName": "Chris"}});
		this.setState({firstName: "Chris"});
	},
	render() {
		var profile;
		if(this.state.firstName === undefined) {
			profile = (
				<div>
					<h3>Create Profile Now! By Clicking here <a onClick={this.createFirstName}>EDIT PROFILE</a></h3>
				</div>
				
			);
		} else {
			if(this.state.profileState === "viewing") {
				profile = (
					<UserProfileViewing state={this.state.profileState} email={this.state.email} role={this.state.role} />
				);
			} else {
				profile = (
					<UserProfileEditing />
				);
			}
		}
		return (
			<div className="row">
				<button onClick={this.toggleProfile}>toggle {this.state.profileState}</button>
				{profile}
			</div>
		);
	}
});