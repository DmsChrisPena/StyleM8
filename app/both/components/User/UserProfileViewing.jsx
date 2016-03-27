UserProfileViewing = React.createClass({
	render() {  
		const user = User.get().profile;
		return (
			<div>
				<h2>{this.props.profileState}</h2>
				<h4>Full Name: {user.firstName} {user.lastName}</h4>
				<h4>Email: {user.email.address}</h4>
				<h4>Role: {this.props.role}</h4>
				<h4>Age: {user.birthDate}</h4>
				<h4>Gender: {user.gender}</h4>
				<h4>Location: {user.city}, {user.state}, {user.zip}</h4>
			</div>
		);
	}
});