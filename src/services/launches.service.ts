import http from "../http-common";
import LaunchesData from "../types/launches.type";
const getAll = () => {
  return http.get<Array<LaunchesData>>("/launches?limit=20&offset=0");
};
const get = (offset: any) => {
  return http.get<LaunchesData>(`/launches?limit=20&offset=${offset}`);
};
const LaunchesDataService = {
  getAll,
  get,
};
export default LaunchesDataService;
