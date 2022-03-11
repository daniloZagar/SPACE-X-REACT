import { useState, useRef, useCallback, useEffect } from "react";
function useInfiniteScroll() {
  const [offset, setOffset] = useState(0);
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      console.log("IS INTERSECTING", first.isIntersecting);
      if (first.isIntersecting) {
        setOffset((prev) => prev + 20);
      }
    })
  );

  return { offset, observer };
}
export default useInfiniteScroll;
