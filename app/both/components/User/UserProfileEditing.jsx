UserProfileEditing = React.createClass({
	render() {
		const user = User.get().profile;
		return (
			<div className="row">	
				<h2>Editing</h2>
				<form className="col offset-s4 s4">
					<div className="row">
						<div className="input-field col s12">
							<input id="firstName" value={user.firstName} type="text" className="validate" />
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="lastName" value={user.lastName} type="text" className="validate" />
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="birthDate" value={user.birthDate} type="text" className="validate" /> 
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="gender" value={user.gender} type="text" className="validate" />
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="city" value={user.city} type="text" className="validate" />
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="state" value={user.state} type="text" className="validate" />
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="zip" value={user.zip} type="text" className="validate" />
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