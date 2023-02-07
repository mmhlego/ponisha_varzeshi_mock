import { Logo } from "assets/images/logo";
import NavItem from "components/NavItem";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function NavBar() {
	//Create this array to set items of nav bar
	type navItem = {
		title: string;
		url: string;
	};

	const navItems: Array<navItem> = [
		{
			title: "مربیان ما",
			url: "/coaches",
		},
		{
			title: "ویدیو های آموزشی",
			url: "/videos",
		},
	];

	// Show the selected page
	const location = useLocation();
	const [pathName, setPathName] = useState<string>(location.pathname);

	useEffect(() => {
		setPathName(location.pathname);
	}, [location.pathname]);

	const handelClick = (path: string): void => {
		setPathName(path);
	};

	return (
		<nav className="nav-bar">
			<Logo />
			<ul>
				{navItems?.map((item, i) => {
					return (
						<NavItem
							key={i}
							title={item.title}
							url={item.url}
							handelClick={handelClick}
							selected={pathName === item.url}
						/>
					);
				})}
			</ul>
		</nav>
	);
}
