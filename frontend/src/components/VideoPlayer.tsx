import React from "react";

type Props = {
	videoUrl: string;
};

export default function VideoPlayer({ videoUrl }: Props) {
	return (
		<video className="video-player" controls>
			<source src={videoUrl} type="video/mp4" />
		</video>
	);
}
