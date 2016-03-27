UserProfile = React.createClass({
	getInitialState() {
	    return {
	        profileState: "viewing",
	        role: User.get().profile.role,
	        email: User.get().profile.email,
	        isCompleted: User.get().profile.isCompleted
	    };
	},
	toggleProfile() {
		var isViewing = true;
		if(isViewing) {
			state = "viewing";
		} else {
			state = "editing";
		}
		this.setState({profileState: state});
	},
	createProfile() {
		Meteor.users.update(User.id(), {$set: {"profile.firstName": "Chris"}});
		this.setState({profileState: "setupProfile"});
	},
	getProfile() {
		var profile;
		if()
			<UserProfileCreating />
		);

		profile = (
			<UserProfileNotComplete createProfile={this.createProfile} />
		);

		profile = (
			<UserProfileViewing state={this.state.profileState} email={this.state.email} role={this.state.role} />
		);

		profile = (
			<UserProfileEditing />
		);
		return profile;
	},
	render() {
		var profile = this.getProfile();
		}
		return (
			<div className="row">
				<button onClick={this.toggleProfile}>toggle {this.state.profileState}</button>
				{profile}
			</div>
		);
	}
});