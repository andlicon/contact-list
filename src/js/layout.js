import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";

import { Context } from './store/appContext.js'

import AddNew from './views/AddNew.jsx';
import Contact from "./views/Contact.jsx";
import injectContext from "./store/appContext.js";
import Alert from './component/Alert.jsx';

//create your first component
const Layout = () => {
	const { store } = useContext(Context);

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className='container d-vertical'>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Contact />} />
						<Route path="/add" element={<AddNew />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					{
						store.alert && <Alert
							mensaje={store.alert.message}
							tipo={store.alert.type} />
					}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
