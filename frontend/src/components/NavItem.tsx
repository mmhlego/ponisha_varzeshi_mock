import React from "react";
import { Link } from "react-router-dom";

type Props = {
	title: string;
	url: string;
};

export default function NavItem({ title, url }: Props) {
	return (
		<Link className="nav-item" to={url}>
			{title}
		</Link>
	);
}
