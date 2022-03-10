import { useState, useRef, useCallback, useEffect } from "react";

function useInfiniteScroll() {
  const [launch, setLaunches] = useState(0);
  const loadMoreRef = useRef(null);
  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    console.log('TARGET', target.isIntersecting)
    if (target.isIntersecting) {
      setLaunches((prev) => prev + 20);
    }
  }, []);
  
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  }, [handleObserver]);
  return { loadMoreRef, launch };
}
export default useInfiniteScroll;
