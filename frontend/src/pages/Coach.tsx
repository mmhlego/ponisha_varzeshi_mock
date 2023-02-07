import AccordianItem from "components/AccordianItem";
import React from "react";

type Props = {};

export default function Coach({}: Props) {
	return (
		<div className="coach-container">
			<AccordianItem
				id={1}
				firstName="reza"
				lastName="javan"
				level={1}
				birthDate="2001-10-04"
				phoneNumber={9146545156}
			/>
			<AccordianItem
				id={2}
				firstName="reza"
				lastName="javan"
				level={2}
				birthDate="2001-10-04"
				phoneNumber={9146545156}
			/>
			<AccordianItem
				id={3}
				firstName="reza"
				lastName="javan"
				level={3}
				birthDate="2001-10-04"
				phoneNumber={9146545156}
			/>
			<AccordianItem
				id={4}
				firstName="reza"
				lastName="javan"
				level={4}
				birthDate="2001-10-04"
				phoneNumber={9146545156}
			/>
		</div>
	);
}
