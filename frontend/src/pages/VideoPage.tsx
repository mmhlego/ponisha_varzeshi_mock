import VideoItem from "components/VideoItem";
import { getVideos } from "data/axios";
import Video from "model/Video";
import { useQuery } from "react-query";

export default function VideoPage() {
	const { isLoading, isError, data: videos } = useQuery("videos", getVideos);

	return (
		<div className="video-container">
			{isLoading ? (
				<h2>Loading...</h2>
			) : isError ? (
				<h2>Sorry, We have some errors...</h2>
			) : (
				videos?.map((video: Video) => {
					return (
						<VideoItem
							key={video.id}
							title={video.title}
							description={video.description}
							videoUrl={video.videoUrl}
							thumbnailUrl={video.thumbnailUrl}
						/>
					);
				})
			)}
		</div>
	);
}
