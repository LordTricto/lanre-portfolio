import {Navigate, Route, Routes} from "react-router-dom";

import Home from "../modules/Home/Pages";
import React from "react";

function AppRouter(): JSX.Element {
	return (
		<>
			<Routes>
				{/* <PageTransitionProgress /> */}
				{/*Routes outside the banking app -> i.e. does not need to be logged in*/}
				{/* <Route path="/signup" exact component={Signup} />
				<Route path="/signup/invite/:type/:a/:b" component={Signup} />
				<Route path="/signup/completed" component={VerifyEmailSignUp} />
				<Route path="/verify-email/:a/:b/:c" component={EmailVerification} />
				<Route path="/login" exact component={AccountLogIn} />
				<Route path="/login/invite/:type/:a/:b" component={AccountLogIn} />
				<Route path="/forgot-password" component={ForgotPassword} />
				<Route path="/tr/:a/:b" component={ShareReceipt} />
				<Route path="/referee/:a/:b" component={ReferenceForm} />
				<Route path="/director/:a/:b" component={DirectorForm} />
				<Route path="/reset-password/:a/:b/:c" component={ResetForgotPassword} /> */}
				<Route path="/" element={<Home />} />
				{/* This will never be triggered. But leave it */}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</>
	);
}

export default AppRouter;
