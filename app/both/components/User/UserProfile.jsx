UserProfile = React.createClass({
	getInitialState() {
	    return {
	        profileState: !User.get().profile.isCompleted ? "notCompleted" : "viewing",
	        role: Meteor.user().profile.role,
	        email: User.get().profile.email,
	        isCompleted: User.get().profile.isCompleted
	    };
	},
	toggleProfile() {
		if(!this.state.isCompleted) {
			return;
		} else {
			if(this.state.profileState === "viewing") {
				state = "editing";
			} else {
				state = "viewing";
			}
		}
		this.setState({profileState: state});
	},
	createProfile() {
		this.setState({profileState: "setupProfile"});
	},
	submitProfile(e) {
		e.preventDefault();
		
		var el = $(e.target);
		var firstName = el.find("#firstName").val();
		var lastName = el.find("#lastName").val();
		var age = el.find("#birthDate").val();
		var gender = el.find("#gender").val();
		var city = el.find("#city").val();
		var state = el.find("#state").val();
		var zip = el.find("#zip").val();

		let profileInfo = {
			firstName,
			lastName,
			age,
			gender,
			city,
			state,
			zip
		}
		Meteor.users.update(User.id(), 
			{$set: 
				{
					"profile.firstName": profileInfo.firstName,
					"profile.lastName": profileInfo.lastName,
					"profile.birthDate": profileInfo.age,
					"profile.gender": profileInfo.gender,
					"profile.city": profileInfo.city,
					"profile.state": profileInfo.state,
					"profile.zip": profileInfo.zip,
					"profile.isCompleted": true
				}
			}
			);
		console.log("profile created! Thanks buddy");
		
	},
	getProfile() {
		var profile;

		if(this.state.profileState === "setupProfile") {
			profile = <UserProfileCreating submitProfile={this.submitProfile} />;
		} else if(this.state.profileState ==="notCompleted") {
			profile = <UserProfileNotComplete createProfle={this.createProfile} />;
		} else if(this.state.profileState === "editing") {
			profile = <UserProfileEditing />;
		} else {
			profile = <UserProfileViewing state={this.state.profileState} email={this.state.email} role={this.state.role} />;
		}

		return profile;
	},
	render() {
		return (
			<div className="row">
				<button onClick={this.toggleProfile}>toggle {this.state.profileState}</button>
				{this.getProfile()}
			</div>
		);
	}
});