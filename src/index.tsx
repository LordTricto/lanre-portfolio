import "./index.css";

import React, {createRef} from "react";
import {BrowserRouter as Router, RouterProvider, createBrowserRouter} from "react-router-dom";
import {enableES5, enableMapSet} from "immer";

import Accrue from "./modules/Accrue/Pages";
import App from "./App";
import Home from "./modules/Home/Pages";
import Lenco from "./modules/Lenco/Pages";
import ReactDOM from "react-dom/client";
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
	{path: "/accrue", name: "Accrue", element: <Lenco />, nodeRef: createRef()},
	{path: "/404", name: "error", element: <h1>hii</h1>, nodeRef: createRef()},
	{path: "*", name: "Error", element: <h1>hii</h1>, nodeRef: createRef()},
];

// const router = createBrowserRouter([
// {
// path: "/",
// element: <App />,
// children: routes.map((route) => ({
// index: route.path === "/",
// path: route.path,
// element: route.element,
// })),
// },
// ]);
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
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
// <React.StrictMode>
// <Router>
// <App />
// </Router>
// </React.StrictMode>
// );
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
