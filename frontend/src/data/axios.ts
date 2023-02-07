import axios from "axios";
import Coach from "model/Coach";
import Video from "model/Video";

const axiosAPI = axios.create({
	baseURL: "http://localhost:3001",
});

const getVideos = async (): Promise<Video[]> => {
	const response = await axiosAPI.get("/videos");
	return response.data;
};

const getCoaches = async (): Promise<Coach[]> => {
	const response = await axiosAPI.get("/coaches");
	return response.data;
};

export default axiosAPI;
export { getVideos, getCoaches };
