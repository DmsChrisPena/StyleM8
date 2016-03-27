UserProfileCreating = React.createClass({
	render() {
		return (
			<div className="row">
				<h2>CREATING PROFILE</h2>
				<form onSubmit={this.props.submitProfile} className="col offset-s4 s4">
					<div className="row">
						<div className="input-field col s12">
							<input id="firstName" type="text" className="validate" />
							<label htmlFor="firstName">First Name</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="lastName" type="text" className="validate" />
							<label htmlFor="lastName">Last Name</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="birthDate" type="text" className="validate" />
							<label htmlFor="birthDate">Age</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="gender" type="text" className="validate" />
							<label htmlFor="gender">Gender</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="city" type="text" className="validate" />
							<label htmlFor="city">City</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="state" type="text" className="validate" />
							<label htmlFor="state">State</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="zip" type="text" className="validate" />
							<label htmlFor="zip">Zip Code</label>
						</div>
					</div>
					<div className="row">
						<button className="waves-effect waves-light btn btn-block">Submit</button>
					</div>
				</form>
			</div> 
		);
	}
});