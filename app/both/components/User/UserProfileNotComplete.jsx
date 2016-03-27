UserProfileNotComplete = React.createClass({
	render() {
		console.log(this.props);
		return (
			<h3>Create Profile <a onClick={this.props.createProfle}>CREATE IT NOW NOOB</a></h3>
		);
	}
});

		// return 
		// 	<h3>Create Profile Now! By Clicking here <a onClick={this.props.createProfile}>CREATE PROFILE</a></h3>
		// );