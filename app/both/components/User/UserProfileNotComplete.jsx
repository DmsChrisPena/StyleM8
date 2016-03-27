UserProfileNotComplete = React.createClass({
	render() {
		console.log(this.props);
		return (
			<div>
				<h3>Create Profile Now! By Clicking here <a onClick={this.props.createProfile}>CREATE PROFILE</a></h3>
			</div>
		);
	}
});