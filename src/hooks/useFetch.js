import { useState, useEffect, useCallback } from "react";
import LaunchesDataService from "../services/launches.service";
function useFetch(offset) {
  const [loading, setLoading] = useState(false);
  const [launchesData, setLaunchesData] = useState([]);
  const getLaunches = useCallback(async () => {
    try {
      setLoading(true);
      const response = await LaunchesDataService.get(offset);
      const data = response.data;
      setLaunchesData((prev) => [...prev, ...data]);
      console.log(data)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [offset]);
  useEffect(() => {
    getLaunches();
  }, [getLaunches]);
  return { loading, launchesData };
}
export default useFetch;
