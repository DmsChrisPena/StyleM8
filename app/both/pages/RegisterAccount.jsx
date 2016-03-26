RegisterAccount = React.createClass({
	getInitialState() {
	    return {
	        role: "user"
	    };
	},
	pickRole(e) {
		var el = e.target;
		if(el.id == "user") {
			this.setState({role: "user"});
		} else {
			this.setState({role: "hairdresser"});
		}
	},
	render() {
		console.log(this.state);

		return (
			<div>
				<a onClick={this.pickRole} id="user" className="waves-effect waves-light btn">User</a>
				<a onClick={this.pickRole} id="haridresser" className="waves-effect waves-light btn">Hairdresser</a>
				<p>{this.state.role}</p>
				<Register type={this.state.role} />
			</div>
		);
	}
});