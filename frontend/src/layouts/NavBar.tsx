import { Logo } from "assets/images/logo";
import NavItem from "components/NavItem";
import React from "react";

type Props = {};

export default function NavBar({}: Props) {
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

	return (
		<nav className="nav-bar">
			<Logo />
			<ul>
				{navItems?.map((item, i) => {
					return (
						<NavItem key={i} title={item.title} url={item.url} />
					);
				})}
			</ul>
		</nav>
	);
}
