// Reaktor API:  https://github.com/kadirahq/meteor-reaktor
// Router API:   https://github.com/meteorhacks/flow-router

// NOTE see flow-router branch for the vanilla router

Reaktor.init(
  <Router>
    <Route path="/" content={Home} layout={MainLayout} />
    <Route path="/login" content={Login} layout={MainLayout} triggersEnter={isLoggedIn} />
    <Route path="/changePassword" content={ChangePassword} layout={MainLayout} triggersEnter={isNotLoggedIn} />
    <Route path="/register" content={RegisterAccount} layout={MainLayout} triggersEnter={isLoggedIn} />
    <Route path="/userProfile" content={UserProfile} layout={MainLayout} triggersEnter={isNotLoggedIn} />
  </Router>
);

// Checks if user is logged in
function isLoggedIn(context, doRedirect) {
	if(User.isLoggedIn()) {
		doRedirect('/');
	}
}

// Checks if user is logged in
function isNotLoggedIn(context, doRedirect) {
  if(!User.isLoggedIn()) {
    doRedirect('/');
  }
}

// Reaktor doensn't have a notFound component yet
FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { content: <NotFound /> });
  }
};
