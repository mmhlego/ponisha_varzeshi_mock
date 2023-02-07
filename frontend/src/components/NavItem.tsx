import React from "react";
import { Link } from "react-router-dom";

type Props = {
	title: string;
	url: string;
	handelClick: (Path: string) => void;
	selected: boolean;
};

export default function NavItem({ title, url, handelClick, selected }: Props) {
	return (
		<Link
			className={`nav-item ${selected ? "selected" : ""}`}
			to={url}
			onClick={() => handelClick(url)}
		>
			{title}
		</Link>
	);
}
