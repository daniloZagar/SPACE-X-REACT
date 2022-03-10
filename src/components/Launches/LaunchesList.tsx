import { Link } from "react-router-dom";
import "./LaunchesList.css";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/index";
export default function Launches() {
  const { loadMoreRef, offset } = useInfiniteScroll();
  console.log("useInfiniteScroll", useInfiniteScroll());
  const { loading, launches } = useFetch(offset);
  console.log(launches);

  function launchLink(id: number) {
    return `/launches/${id}`;
  }

  return (
    <div>
      <div className="h-screen grid grid-cols-1 lg:grid-cols-3 gap-12">
        {launches?.map((l, index) => {
          return (
            <Link to={launchLink(l.flight_number)} key={index}>
              <div className="col-span-1 flex flex-col lg:flex-row gap-12 justify-center items-center bg-yellow py-10 px-5">
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-white text-2xl">
                    Mission Number: {l.flight_number}
                  </p>
                  <p className="text-white text-2xl">
                    Mission Name: {l.mission_name}
                  </p>
                  <p className="text-white text-2xl">
                    Launch Year: {l.launch_year}
                  </p>
                </div>

                <img
                  className="w-20 h-20 text-2xl"
                  src={l.links.mission_patch_small}
                  alt="rocket"
                />
              </div>
            </Link>
          );
        })}
      </div>
      <div ref={loadMoreRef}>{loading && <Loader />}</div>
    </div>
  );
}
