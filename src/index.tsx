import "./index.css";

import React, {createRef} from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {enableES5, enableMapSet} from "immer";

import Accrue from "./modules/Accrue/Pages";
// import Accrue from "./modules/Accrue/Pages";
import App from "./App";
import Berger from "./modules/Berger/Pages";
import Fora from "./modules/Fora/Pages";
import Home from "./modules/Home/Pages";
import Lenco from "./modules/Lenco/Pages";
// import Lenco from "./modules/Lenco/Pages";
import ReactDOM from "react-dom/client";
import Ridr from "./modules/Ridr/Pages";
import reportWebVitals from "./reportWebVitals";

enableMapSet();
enableES5();

export type RouterRoute = {
	path: string;
	name: string;
	element: JSX.Element;
	nodeRef: React.RefObject<HTMLDivElement>;
};

export const routes: RouterRoute[] = [
	{path: "/", name: "Home", element: <Home />, nodeRef: createRef()},
	{path: "/lenco", name: "Lenco", element: <Lenco />, nodeRef: createRef()},
	{path: "/fora", name: "Fora", element: <Fora />, nodeRef: createRef()},
	{path: "/ridr", name: "Ridr", element: <Ridr />, nodeRef: createRef()},
	{path: "/accrue", name: "Accrue", element: <Accrue />, nodeRef: createRef()},
	{path: "/berger", name: "Berger", element: <Berger />, nodeRef: createRef()},
	{path: "/404", name: "error", element: <h1>hii</h1>, nodeRef: createRef()},
	// {path: "/accrue", name: "Accrue", element: <Lenco />, nodeRef: createRef()},
	// {path: "*", name: "Error", element: <Home />, nodeRef: createRef()},
];

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: routes.map((route) => ({
			index: route.path === "/",
			path: route.path === "/" ? undefined : route.path,
			element: route.element,
		})),
	},
	{
		path: "*",
		element: <h1>hii</h1>,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
