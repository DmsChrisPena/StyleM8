UserProfileViewing = React.createClass({
	render() {
		return (
			<div>
				<h2>{this.props.profileState}</h2>
				<h4>Full Name: Chris Pena</h4>
				<h4>Email: {this.props.email}</h4>
				<h4>Role: {this.props.role}</h4>
				<h4>Age: 24</h4>
				<h4>Gender: Male</h4>
				<h4>Location: Houston, Texas, 77007</h4>
			</div>
		);
	}
});