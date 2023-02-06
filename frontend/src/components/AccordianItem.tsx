import React, { useState } from "react";

type Props = {
	id: number;
	firstName: string;
	lastName: string;
	level: number;
	birthDate: string;
	phoneNumber: number;
};

export default function AccordianItem({
	firstName,
	lastName,
	level,
	birthDate,
	phoneNumber,
}: Props) {
	//Create this state to open and close accordian
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const coachBirthDate = new Date(birthDate);

	const handelClick = (e: any): void => {
		e.preventDefault();
		isOpen ? setIsOpen(false) : setIsOpen(true);
		console.log(isOpen);
	};

	return (
		<div
			style={{
				backgroundColor:
					level === 1
						? "#FFD700"
						: level === 2
						? "#C0C0C0"
						: level === 3
						? "#CD7F32"
						: "#7ACFFF",
			}}
			className={`accordian ${isOpen ? "open" : ""}`}
			onClick={(e) => handelClick(e)}
		>
			<div className="title">
				<p>{`نام و نام خانوادگی: ${firstName} ${lastName}`}</p>
				<p>{`کاربر سطح ${level}`}</p>
			</div>
			<div className="additional">
				<p>{`تلفن تماس: ${phoneNumber}`}</p>
				<p>{`تاریخ تولد: ${coachBirthDate}`}</p>
			</div>
		</div>
	);
}
