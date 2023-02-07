import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

type Props = {
	title: string;
	description: string;
	videoUrl: string;
	thumbnailUrl: string;
};

export default function VideoItem({
	title,
	description,
	videoUrl,
	thumbnailUrl,
}: Props) {
	//Create this state to play video
	const [play, setPlay] = useState<boolean>(false);

	const playVideo = (): void => {
		setPlay(true);
	};

	return (
		<div className="video-item" onClick={() => playVideo()}>
			{play ? (
				<VideoPlayer videoUrl={videoUrl} />
			) : (
				<>
					<img alt={title} src={thumbnailUrl} />
					<div className="video-des">
						<p className="title">{title}</p>
						<p className="additional">{description}</p>
					</div>
				</>
			)}
		</div>
	);
}
