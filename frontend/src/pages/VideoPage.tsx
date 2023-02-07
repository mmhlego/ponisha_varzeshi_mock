import VideoItem from "components/VideoItem";
import { getVideos } from "data/axios";
import { useQuery } from "react-query";
import React from "react";
import Video from "model/Video";

type Props = {};

export default function VideoPage({}: Props) {
	const { isLoading, isError, data: videos } = useQuery("videos", getVideos);
	console.log(videos);

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
							descroption={video.description}
							videoUrl={video.videoUrl}
							thumbnailUrl="https://fitgardi.com/wp-content/uploads/2021/09/%D9%84%D9%86%D8%AF%D9%85%D8%A7%DB%8C%D9%86-%DA%86%DB%8C%D8%B3%D8%AA%D8%9F-%D9%86%D8%AD%D9%88%D9%87-%D8%A7%D8%AC%D8%B1%D8%A7%DB%8C-7-%D8%AD%D8%B1%DA%A9%D8%AA-%D9%84%D9%86%D8%AF%D9%85%D8%A7%DB%8C%D9%86-%D8%AF%D8%B1-%D8%A8%D8%AF%D9%86%D8%B3%D8%A7%D8%B2%DB%8C-Landmine.jpg"
						/>
					);
				})
			)}
		</div>
	);
}
