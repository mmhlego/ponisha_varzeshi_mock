import AccordionItem from "components/AccordionItem";
import { getCoaches } from "data/axios";
import Coach from "model/Coach";
import { useQuery } from "react-query";

export default function CoachPage() {
	const {
		isLoading,
		isError,
		data: coaches,
	} = useQuery("coaches", getCoaches);

	return (
		<div className="coach-container">
			{isLoading ? (
				<h2>Loading...</h2>
			) : isError ? (
				<h2>Sorry, We have some errors...</h2>
			) : (
				coaches?.map((coach: Coach) => {
					return (
						<AccordionItem
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
