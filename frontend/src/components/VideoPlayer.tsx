type Props = {
	videoUrl: string;
};

export default function VideoPlayer({ videoUrl }: Props) {
	return (
		<video className="video-player" controls autoPlay>
			<source src={videoUrl} type="video/mp4" />
		</video>
	);
}
