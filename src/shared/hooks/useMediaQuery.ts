import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQueryList.matches);
    /***************************
     *  // Initial check
     ***************************/

    setMatches(mediaQueryList.matches);
    /***************************
     *  // Listen for changes
     ***************************/

    mediaQueryList.addEventListener("change", handleChange);
    /***************************
     *  // Cleanup
     ***************************/

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
/***************************
 *  // use case
 ***************************/
//const isMobile = useMediaQuery('(max-width: 767px)');
