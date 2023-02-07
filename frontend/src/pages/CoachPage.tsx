import AccordianItem from "components/AccordianItem";
import { getCoaches } from "data/axios";
import { useQuery } from "react-query";
import React from "react";
import Coach from "model/Coach";

type Props = {};

export default function CoachPage({}: Props) {
	const {
		isLoading,
		isError,
		data: coaches,
	} = useQuery("coches", getCoaches);

	return (
		<div className="coach-container">
			{isLoading ? (
				<h2>Loading...</h2>
			) : isError ? (
				<h2>Sorry, We have some errors...</h2>
			) : (
				coaches?.map((coach: Coach) => {
					return (
						<AccordianItem
							key={coach.id}
							firstName={coach.firstName}
							lastName={coach.lastName}
							level={coach.level}
							birthDate={coach.birthDate}
							phoneNumber={coach.phoneNumber}
						/>
					);
				})
			)}
		</div>
	);
}
