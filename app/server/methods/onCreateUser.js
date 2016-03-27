Accounts.onCreateUser((options, user) => {
	console.log(options, user);
	if(options.profile.role === "user") {
		options.profile = {
			email: user.emails[0],
			role: options.profile.role,
			firstName: "",
			lastName: "",
			birthDate: "",
			gender: "",
			city: "",
			state: "",
			zip: "",
			profileComplete: false
		}; 
	} else {
		options.profile = {
			email: user.emails[0],
			role: options.profile.role,
			firstName: "",
			lastName: "",
			birthDate: "",
			gender: "",
			city: "",
			state: "",
			zip: "",
			profileComplete: false
		}; 
	}
	if(options.profile) {
		user.profile = options.profile;
	}
	return user;
});