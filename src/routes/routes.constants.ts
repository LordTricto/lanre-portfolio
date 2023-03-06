import Home from "../modules/Home/Pages";
import Lenco from "../modules/Lenco/Pages";

type RouterRoutes = {
	path: string;
	name: string;
	Component: () => JSX.Element;
};
export const Routes = Object.freeze({
	HOME: "/",
	LENCO: "/lenco",
	ACCRUE: "/accrue",
	FORA: "/fora",
	RIDR: "/ridr",
	BERGER: "/berger",
});

export const routerRoutes: RouterRoutes[] = [
	{path: Routes.HOME, name: "Home", Component: Home},
	{path: "/about", name: "About", Component: Lenco},
];
