import http from "../http-common";
import LaunchesData from "../types/launches.type";
const get = (offset: number) => {
  return http.get<Array<LaunchesData>>(`/launches?limit=20&offset=${offset}`);
};
const LaunchesDataService = {
  get,
};
export default LaunchesDataService;
